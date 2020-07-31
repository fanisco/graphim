import { Entity, BaseEntity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { ObjectType, Field, ID } from '@nestjs/graphql';
import { Basket } from './basket.model';
import { Product } from '../../catalog/models/product.model';

@Entity()
@ObjectType()
export class BasketItem extends BaseEntity {
  @Field(() => ID)
  @PrimaryGeneratedColumn()
  id: number;

  // @Field(() => [Product])
  // product: Product;

  @Field(() => Basket)
  basket: Basket;

  @Field()
  @Column()
  amount: number;
}
