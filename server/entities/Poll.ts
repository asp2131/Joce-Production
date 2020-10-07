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
import { Rating } from "./Rating";


@ObjectType()
@Entity()
export class Poll extends BaseEntity {
  @Field(() => Int)
  @PrimaryGeneratedColumn()
  id!: number;

  @Field(() => String)
  @Column()
  media: string;

  @Field()
  @ManyToOne(() => User, (user) => user.polls)
  creator: String;

  @Field()
  @ManyToOne(() => Rating, (rating) => rating.polls)
  rating: Rating;

  @Field(() => String)
  @CreateDateColumn()
  createdAt: Date;

  @Field(() => String)
  @UpdateDateColumn()
  updatedAt: Date;
  
}
