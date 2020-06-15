import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export default class Product implements IProduct {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    title: string;

    @Column('text')
    descr: string;

    @Column('double')
    price: number;
}

export enum ProductChangableFields {
    title = 'title',
    descr = 'descr',
    price = 'price'
}

export interface IProductChangableFields {
    [ProductChangableFields.title]: string;
    [ProductChangableFields.descr]: string;
    [ProductChangableFields.price]: number;
}

export interface IProduct extends IProductChangableFields {
    id: number;
}
