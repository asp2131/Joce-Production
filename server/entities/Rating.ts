import { ObjectType, Field, Int } from "type-graphql";
import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  BaseEntity,
  ManyToOne,
  OneToMany
} from "typeorm";
import { Poll } from "./Poll";

@ObjectType()
@Entity()
export class Rating extends BaseEntity {
  @Field(() => Int)
  @PrimaryGeneratedColumn()
  id!: number;

  @Field(() => Boolean)
  @Column()
  meter: boolean;

  @Field(() => Boolean)
  @Column()
  abc: boolean;

  @Field(() => Boolean)
  @Column()
  five_star: boolean;

  @Field(() => String)
  @CreateDateColumn()
  createdAt: Date;

  @Field(() => String)
  @UpdateDateColumn()
  updatedAt: Date;

  @OneToMany(() => Poll, (poll) => poll.rating)
  polls: Poll[];
  
}
