import { Entity, BaseEntity, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { ObjectType, Field, ID } from '@nestjs/graphql';
import { BasketItem } from './basket-item.model';

@Entity()
@ObjectType()
export class Basket extends BaseEntity {
  @Field(() => ID)
  @PrimaryGeneratedColumn()
  id: number;

  @Field(() => [BasketItem])
  items: BasketItem[];
}
