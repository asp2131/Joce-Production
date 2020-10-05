import express from "express";
import { ApolloServer } from "apollo-server-express";
import { buildSchema } from "type-graphql";
// import Redis from "ioredis";
// import session from "express-session";
import cors from "cors";
import { createConnection } from "typeorm";
import { Post } from "./entities/Post";
import { User } from "./entities/User";
import {UserResolver} from "./resolvers/UserResolver"; 
import { createUserLoader } from "./utils/createUserLoader";

const main = async () => {
  const conn = await createConnection({
    type: "mongodb",
    url: `mongodb+srv://dev:epD6au7LST8VALku@cluster0.dzvvu.gcp.mongodb.net/joce?retryWrites=true&w=majority`,
    useNewUrlParser: true,
    synchronize: true,
    logging: true,
    entities: [Post, User]
  });
  // await conn.runMigrations();

  // await Post.delete({});

  const app = express();

  app.use(
    cors({
      origin: 'http://localhost:3000/',
      credentials: true,
    })
  );


  const apolloServer = new ApolloServer({
    schema: await buildSchema({
      resolvers: [UserResolver],
      validate: false,
    }),
    context: ({ req, res }) => ({
      req,
      res,
      // redis,
      userLoader: createUserLoader(),
    }),
  });

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