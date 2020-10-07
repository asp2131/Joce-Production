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
export class Location extends BaseEntity {
  @Field(() => Int)
  @PrimaryGeneratedColumn()
  id!: number;

  @Field(() => String, { nullable: true })
  latitude: string | null; // 1 or -1 or null

  @Field(() => String)
  @Column()
  longitude: string;

  @Field()
  @ManyToOne(() => User, (user) => user.location)
  creator: String;

  @Field(() => String)
  @CreateDateColumn()
  createdAt: Date;

  @Field(() => String)
  @UpdateDateColumn()
  updatedAt: Date;
}