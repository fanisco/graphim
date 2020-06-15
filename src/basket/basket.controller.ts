import { Controller, Post, Get, Patch, Delete, Body, Param, ParseIntPipe } from '@nestjs/common';
import BasketService from './basket.service';
import { PutToBasketDto } from './put.dto';

@Controller('basket')
export default class BasketController {
    constructor(private basketService: BasketService) {}

    @Post('put')
    putToBasket(@Body() {productId, amount}: PutToBasketDto): any {
        this.basketService.putToBasket(productId, amount);
    }

    // @Get('read/:id')
    // getProduct(@Param('id', ParseIntPipe) id: number): any {
    //     return this.productsService.findOne(id);
    // }

    // @Patch('update/:id')
    // updateProduct(@Param('id', ParseIntPipe) id: number, @Body() completeBody: any): any {
    //     this.productsService.update(id, completeBody);
    //     return null;
    // }

    // @Delete('delete/:id')
    // deleteProduct(@Param('id', ParseIntPipe) id: number): any {
    //     this.productsService.remove(id);
    //     return null;
    // }

    // @Get('list')
    // getProducts(): any {
    //     return this.productsService.findAll();
    // }
}
