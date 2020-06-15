import { Controller, Post, Get, Patch, Delete, Body, Param, ParseIntPipe } from '@nestjs/common';
import { PagesService } from './pages.service';
import { PageCreateDto } from './dto/page-create.dto';

@Controller('pages')
export class PagesController {
    constructor(private readonly pagesService: PagesService) {}

    @Post('create')
    addPage(@Body() productDto: PageCreateDto): any {
        return this.pagesService.createAndSave(productDto);
    }
}
