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
import { getConnection } from "typeorm";

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
    // @FieldResolver(() => String)
    // email(@Root() user: User, @Ctx() { req }: MyContext) {
    //     // this is the current user and its ok to show them their own email
    //     if (req.session.userId === user.id) {
    //         return user.email;
    //     }
    //     // current user wants to see someone elses email
    //     return "";
    // }

   
    @Query(() => User, { nullable: true })
    me(@Ctx() { req }: MyContext) {
        // you are not logged in
        // if (!req.session.userId) {
        //     return null;
        // }

        return User.findOne();
    }

  

    @Mutation(() => UserResponse)
    async register(
        // @Arg("options") options: UsernamePasswordInput,
        @Ctx() { req }: MyContext
    ): Promise<UserResponse> {
        // const errors = validateRegister(options);
        

        let user;
        try {
            // User.create({}).save()
            const result = await getConnection()
                .createQueryBuilder()
                .insert()
                .into(User)
                .values({
                    username: req.username,
                    email: req.email,
                })
                .returning("*")
                .execute();
            user = result.raw[0];
        } catch (err) {
            //|| err.detail.includes("already exists")) {
            console.log(err);
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

    @Mutation(() => UserResponse)
    async login(
        @Arg("usernameOrEmail") usernameOrEmail: string,
        @Ctx() { req }: MyContext
    ): Promise<UserResponse> {
        const user = await User.findOne(
            usernameOrEmail.includes("@")
                ? { where: { email: usernameOrEmail } }
                : { where: { username: usernameOrEmail } }
        );
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
       

        return {
            user,
        };
    }

}