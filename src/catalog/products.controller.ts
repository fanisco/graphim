import { Controller, Post, Get, Patch, Delete, Body, Param, ParseIntPipe } from '@nestjs/common';
import ProductsService from './products.service';

@Controller('products')
export default class ProductsController {
    constructor(private productsService: ProductsService) {}

    @Post('create')
    addProduct(@Body() completeBody: any): any {
        console.log(completeBody);
        return this.productsService.createAndSave(completeBody);
    }

    @Get('read/:id')
    getProduct(@Param('id', ParseIntPipe) id: number): any {
        return this.productsService.findOne(id);
    }

    @Patch('update/:id')
    updateProduct(@Param('id', ParseIntPipe) id: number, @Body() completeBody: any): any {
        this.productsService.update(id, completeBody);
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
