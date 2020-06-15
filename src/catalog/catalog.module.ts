import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import ProductsController from './products.controller';
import ProductsService from './products.service';
import { Product } from './product.entity';

@Module({
    imports: [TypeOrmModule.forFeature([Product])],
    exports: [ProductsService],
    controllers: [ProductsController],
    providers: [ProductsService],
})
export class CatalogModule {}