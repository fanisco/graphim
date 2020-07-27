import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Page implements IPage {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    title: string;

    @Column()
    alt: string;

    @Column()
    h1: string;

    @Column('text')
    descr: string;

    @Column({type: Boolean, nullable: true})
    isIndex: boolean = null;
}

interface IPage {
    id: number;
}
