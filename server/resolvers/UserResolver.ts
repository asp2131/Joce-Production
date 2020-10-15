import {
  Resolver,
  Mutation,
  Arg,
  Field,
  Ctx,
  ObjectType,
  InputType,
  Query,
  FieldResolver,
  Root,
} from "type-graphql";
import { MyContext } from "../types";
import { User } from "../entities/User";
// import { COOKIE_NAME, FORGET_PASSWORD_PREFIX } from "../constants";
import { getConnection, getMongoManager } from "typeorm";

@ObjectType()
class FieldError {
  @Field()
  field: string;
  @Field()
  message: string;
}

@ObjectType()
class UserResponse {
  @Field(() => [FieldError], { nullable: true })
  errors?: FieldError[];

  @Field(() => User, { nullable: true })
  user?: User;
}

@InputType()
class UsernamePasswordInput {
  @Field()
  email: string;
  @Field()
  username: string;
  @Field()
  id_google: string;
}

@Resolver(User)
export class UserResolver {
  @Query(() => UserResponse)
  async login(
    @Arg("id_google", { nullable: true }) id_google?: string,
    // @Ctx() { res }: MyContext
  ) {
    // const errors = validateRegister(options);

    let user;
    // let user = {email: email, username: username, id_google: id_google} as User;

    try {
      // const manager = getMongoManager();
      // newUser = await manager.save(user);
      user = await getConnection()
    .getRepository(User)
    .createQueryBuilder("user")
    .where("user.id_google = :id_google", { id_google: id_google })
    .getOne();

      
      if (!user) {
        return {
          errors: [
            {
              field: "usernameOrEmail",
              message: "that username doesn't exist",
            },
          ],
        };
      }
      // res.send(user);
      // store user id session
      // this will set a cookie on the user
      // keep them logged in
      // req.session.userId = user.id;
    } catch (e) {
      console.log(e);
    }
    return {user} ;
  }

  @Mutation(() => UserResponse)
  async register(
    @Arg("email", { nullable: false }) email?: string,
    @Arg("username", { nullable: false }) username?: string,
    @Arg("id_google", { nullable: false }) id_google?: string,
    @Arg("profile_pic", { nullable: true }) profile_pic?: string,
    @Arg("bio", { nullable: true }) bio?: string,
    // @Arg("profile_pic", { nullable: true }) profile_pic?: string
  ) {
    // const errors = validateRegister(options);

    let newUser: object;
    let user;
    // let user = {email: email, username: username, id_google: id_google} as User;

    try {
      // const manager = getMongoManager();
      // newUser = await manager.save(user);

      const result = await getConnection()
        .createQueryBuilder()
        .insert()
        .into(User)
        .values({
          email: email,
          username: username,
          id_google: id_google,
          profile_pic: profile_pic,
          bio: bio
        })
        .execute()
        ;
      user = result.raw[0];
    } catch (err) {
      err.detail.includes("already exists") 
      // console.log(err);
      if (err.code === "23505") {
        return {
          errors: [
            {
              field: "username",
              message: "username already taken",
            },
          ],
        };
      }
    }
    // store user id session
    // this will set a cookie on the user
    // keep them logged in
    // req.session.userId = user.id;
    return { user };
  }

  // @Mutation(() => UserResponse)
  // async login(
  //     @Arg("usernameOrEmail") usernameOrEmail: string,
  //     @Ctx() { req }: MyContext
  // ): Promise<UserResponse> {
  //     const user = await User.findOne(
  //         usernameOrEmail.includes("@")
  //             ? { where: { email: usernameOrEmail } }
  //             : { where: { username: usernameOrEmail } }
  //     );
  //     if (!user) {
  //         return {
  //             errors: [
  //                 {
  //                     field: "usernameOrEmail",
  //                     message: "that username doesn't exist",
  //                 },
  //             ],
  //         };
  //     }

  // return {
  //     user,
  // };
  // }

    @Query(() => User, { nullable: true })
    me(@Ctx() { req }: MyContext) {
    // you are not logged in
    // if (!req.session.userId) {
    //     return null;
    // }

    return "log in route";
  }
}
