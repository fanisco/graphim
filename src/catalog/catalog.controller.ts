import { Controller, Post, Get, Patch, Delete, Body, Param, ParseIntPipe } from '@nestjs/common';
import CatalogService from './catalog.service';

@Controller('catalog')
export default class CatalogController {
    constructor(private catalogService: CatalogService) {}

    @Post('p/create')
    addProduct(@Body() completeBody: any): any {
        return this.catalogService.addSingleProduct(completeBody);
    }

    @Get('p/read/:id')
    getProduct(@Param('id', ParseIntPipe) id: number): any {
        return this.catalogService.getSingleProduct(id);
    }

    @Patch('p/update/:id')
    updateProduct(@Param('id', ParseIntPipe) id: number, @Body() completeBody: any): any {
        this.catalogService.updateSingleProduct(id, completeBody);
        return null;
    }

    @Delete('p/update/:id')
    deleteProduct(@Param('id', ParseIntPipe) id: number): any {
        this.catalogService.deleteSingleProduct(id);
        return null;
    }

    @Get('p/list')
    getProducts(): any {
        return this.catalogService.getAllProducts();
    }
}
