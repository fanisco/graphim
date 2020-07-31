import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CatalogModule } from '../catalog/catalog.module';
import { BasketResolver } from './basket.resolver';
import { BasketService } from './basket.service';
import { Basket } from './models/basket.model';
import { BasketItem } from './models/basket-item.model';

@Module({
    imports: [TypeOrmModule.forFeature([Basket, BasketItem]), CatalogModule],
    providers: [BasketResolver, BasketService],
})
export class BasketModule {}
