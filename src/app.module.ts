import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PagesModule } from './pages/pages.module';
import { CatalogModule } from './catalog/catalog.module';
import { BasketModule } from './basket/basket.module';

@Module({
  imports: [
    TypeOrmModule.forRoot(),
    PagesModule,
    CatalogModule,
    BasketModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
