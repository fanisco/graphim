import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { BasketItem } from './basketItem.entity';

@Entity()
export class Basket implements IBasket {
    @PrimaryGeneratedColumn()
    id: number;

    @OneToMany(type => BasketItem, item => item.basket)
    items: BasketItem[];
}

export interface IBasket {
  id: number;
  items: BasketItem[];
}
