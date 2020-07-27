import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DynamicController } from './dynamic.controller';
import { PagesController } from './pages.controller';
import { PagesService } from './pages.service';
import { Page } from './page.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Page])],
  controllers: [DynamicController, PagesController],
  providers: [PagesService],
})
export class PagesModule {}
