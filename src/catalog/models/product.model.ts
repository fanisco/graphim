import { ObjectType, Field, ID } from '@nestjs/graphql';
import { Entity, BaseEntity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
@ObjectType()
export class Product extends BaseEntity {
    @Field(() => ID)
    @PrimaryGeneratedColumn()
    id: number;

    @Field(() => String)
    @Column()
    title: string;

    @Field(() => String)
    @Column('text')
    descr: string;

    @Field(() => Number)
    @Column('double')
    price: number;
}
