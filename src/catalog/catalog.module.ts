import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProductsResolver } from './products.resolver';
import { ProductsService } from './products.service';
import { Product } from './product.entity';

@Module({
    imports: [TypeOrmModule.forFeature([Product])],
    exports: [ProductsService],
    providers: [ProductsResolver, ProductsService],
})
export class CatalogModule {}
