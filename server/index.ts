import express from "express";
import { ApolloServer } from "apollo-server-express";
import { buildSchema } from "type-graphql";
import redis from "redis";
import session from "express-session";
import connectRedis from "connect-redis";
import cors from "cors";
import { createConnection } from "typeorm";
import { UserResolver } from "./resolvers/UserResolver";
import "dotenv-safe/config";

import {
  Post,
  User,
  Location,
  Rating,
  Poll,
  Comment,
  Follower,
} from "./entities";

const main = async () => {
  const conn = await createConnection({
    type: "postgres",
    url:
      process.env.DATABASE_URL,
    synchronize: true,
    logging: true,
    entities: [Post, User, Location, Rating, Poll, Comment, Follower],
  });

  const app = express();

  // const RedisStore = connectRedis(session);
  // let redisClient = redis.createClient()
  app.use(
    session({
      name: process.env.COOKIE_NAME,
      // store: new RedisStore({
      //   client: redisClient,
      //   disableTouch: true,
      // }),
      cookie: {
        maxAge: 1000 * 60 * 60 * 24 * 365 * 10, // 10 years
        httpOnly: true,
        sameSite: "lax", // csrf
        secure: false, // cookie only works in https
      },
      saveUninitialized: false,
      secret: process.env.SESSION_SECRET || "hi",
      resave: false,
    })
  //   cors({
  //     origin: "http://localhost:3000/",
  //     credentials: true,
  //   })
  );
  

  const apolloServer = new ApolloServer({
    schema: await buildSchema({
      resolvers: [UserResolver],
      validate: false,
    }),
    context: ({ req, res }) => ({
      req,
      res,
      redis,
    }),
  });

  // app.get('/', (req,res)=>{
  //   res.send('on')
  // })

  apolloServer.applyMiddleware({
    app,
    cors: false,
  });

  app.listen(3000, () => {
    console.log("server started on localhost:3000");
  });
};

main().catch((err) => {
  console.error(err);
});
