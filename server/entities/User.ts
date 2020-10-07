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
import {Poll} from './Poll'
import { Follower } from "./Follower";
import { Location } from "./Location";

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

  @Field(() => String)
  @Column({ nullable: true })
  profile_pic: string;

  @Field(() => String)
  @CreateDateColumn({ nullable: true })
  createdAt: Date;

  @Field(() => String)
  @UpdateDateColumn({ nullable: true })
  updatedAt: Date;

  @OneToMany(() => Post, (post) => post.creator)
  posts: Post[];

  @OneToMany(() => Poll, (poll) => poll.creator)
  polls: Poll[];

  @OneToMany(() => Location, (location) => location.creator)
  location: Location[];

  @OneToMany(() => Follower, (follower) => follower.followee)
  followers: Follower[];
}