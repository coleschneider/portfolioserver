// import { Entity } from 'typeorm';
// import { Field, ObjectType, InputType,  } from 'type-graphql';

// import {
//   PrimaryGeneratedColumn,
//   CreateDateColumn,
//   UpdateDateColumn,

// } from 'typeorm';

// type Constructor = new (...args: any[]) => {};

// export const WithName = <SubClass extends Constructor>(subClass?: SubClass) => {
//   @ObjectType({ isAbstract: true })
//   @InputType({ isAbstract: true })
//   class Mixin extends getFallbackClass(subClass) {
//     constructor(...args: any[]) {
//       super(...args);
//     }
//     @Field()
//     @Column()
//     first: string;

//     @Field()
//     @Column()
//     second: string;

//   }

//   return Mixin;
// };

import { Field, ObjectType } from 'type-graphql';
import {
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';
export type Lazy<T extends object> = Promise<T> | T;
@ObjectType()
export class BaseEntity {
  @Field()
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Field()
  @UpdateDateColumn()
  updatedAt: Date;

  @Field()
  @CreateDateColumn()
  createdAt: Date;
}
