import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm'
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CatalogModule } from './catalog/catalog.module';
import Product from './catalog/product.entity';

@Module({
  imports: [TypeOrmModule.forRoot({
    type: 'mysql',
    host: 'localhost',
    port: 3306,
    username: 'usr_dev',
    password: 'RKqG^YzA#wzB9d^R',
    database: 'db_im',
    entities: [Product],
    synchronize: true,
  }), CatalogModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
