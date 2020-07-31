import { Controller, Get, Request, NotFoundException } from '@nestjs/common';
import { PagesService } from './pages.service';

@Controller('*')
export class DynamicController {
  constructor(private readonly pagesService: PagesService) {}

  @Get()
  async test(@Request() req) {
    const page = await this.pagesService.analyzeUrl(req.url);
    if (!page) {
      throw new NotFoundException('Page is not found.');
    }
    console.log(page);
    return 'test';
  }
}
