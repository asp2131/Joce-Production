import { ObjectType, Field, Int } from "type-graphql";
import {
    Entity,
    PrimaryGeneratedColumn,
    CreateDateColumn,
    UpdateDateColumn,
    Column,
    BaseEntity,
    OneToMany,
} from "typeorm";
import {Post} from './Post'

@ObjectType()
@Entity()
export class User extends BaseEntity {
    @Field(() => Int)
    @PrimaryGeneratedColumn()
    id!: number;

    @Field(() => String)
    @Column({ unique: true })
    username!: string;

    @Field(() => String)
    @Column({ unique: true })
    id_google!: string;

    @Field(() => String)
    @Column({ unique: true, nullable: false })
    email!: string;

    @Field(() => String)
    @Column({ nullable: true })
    bio: string;

    @OneToMany(() => Post, (post) => post.creator)
    posts: Post[];


    @Field(() => String)
    @CreateDateColumn({ nullable: true })
    createdAt: Date;

    @Field(() => String)
    @UpdateDateColumn({ nullable: true })
    updatedAt: Date;
}