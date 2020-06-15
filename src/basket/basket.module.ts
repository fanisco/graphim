import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CatalogModule } from '../catalog/catalog.module';
import BasketController from './basket.controller';
import BasketService from './basket.service';
import { Basket } from './basket.entity';
import { BasketItem } from './basketItem.entity';

@Module({
    imports: [TypeOrmModule.forFeature([Basket, BasketItem]), CatalogModule],
    controllers: [BasketController],
    providers: [BasketService],
})
export class BasketModule {}