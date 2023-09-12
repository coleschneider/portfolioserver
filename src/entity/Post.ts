import { Entity } from 'typeorm';
import { Field, ObjectType } from 'type-graphql';

import { Column } from 'typeorm';
import { BaseEntity } from './BaseEntity';

@Entity('post')
@ObjectType()
export class Post extends BaseEntity {
  @Field()
  @Column()
  name: string;

  @Field()
  @Column({ default: 0 })
  views: number;
}
