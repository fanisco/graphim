import { Controller, Post, Get, Patch, Delete, Body, Param, ParseIntPipe } from '@nestjs/common';
import ProductsService from './products.service';
import { ProductDto } from './product.dto';

@Controller('products')
export default class ProductsController {
    constructor(private productsService: ProductsService) {}

    @Post('create')
    addProduct(@Body() productDto: ProductDto): any {
        return this.productsService.createAndSave(productDto);
    }

    @Get('read/:id')
    getProduct(@Param('id', ParseIntPipe) id: number): any {
        return this.productsService.findOne(id);
    }

    @Patch('update/:id')
    updateProduct(@Param('id', ParseIntPipe) id: number, @Body() productDto: ProductDto): any {
        this.productsService.update(id, productDto);
        return null;
    }

    @Delete('delete/:id')
    deleteProduct(@Param('id', ParseIntPipe) id: number): any {
        this.productsService.remove(id);
        return null;
    }

    @Get('list')
    getProducts(): any {
        return this.productsService.findAll();
    }
}
