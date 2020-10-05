import { ObjectType, Field, Int } from "type-graphql";
import {
    Entity,
    Column,
    PrimaryGeneratedColumn,
    CreateDateColumn,
    UpdateDateColumn,
    BaseEntity,
    ManyToOne,
} from "typeorm";
import { User } from "./User";

@ObjectType()
@Entity()
export class Post extends BaseEntity {
    @Field(() => Int)
    @PrimaryGeneratedColumn()
    id!: number;


    @Field(() => String)
    @Column()
    text!: string;


    @Field(() => Int, { nullable: true })
    voteStatus: number | null; // 1 or -1 or null

    @Field(() => Int)
    @Column()
    creatorId: number;

    @Field()
    @ManyToOne(() => User, (user) => user.posts)
    creator: User;


    @Field(() => String)
    @CreateDateColumn()
    createdAt: Date;

    @Field(() => String)
    @UpdateDateColumn()
    updatedAt: Date;
}