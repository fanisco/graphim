import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { Basket } from './basket.entity';
import { Product } from '../catalog/product.entity';

@Entity()
export class BasketItem implements IBasketItem {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(type => Product)
  product: Product;

  @ManyToOne(type => Basket, basket => basket.items)
  basket: Basket;

  @Column()
  amount: number;
}

export interface IBasketItem {
  id: number;
  product: Product;
  basket: Basket;
  amount: number;
}