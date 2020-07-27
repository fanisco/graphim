import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { GraphQLModule } from '@nestjs/graphql';
// import { PagesModule } from './pages/pages.module';
import { CatalogModule } from './catalog/catalog.module';
// import { BasketModule } from './basket/basket.module';

@Module({
  imports: [
    TypeOrmModule.forRoot(),
    // PagesModule,
    CatalogModule,
    // BasketModule,
    GraphQLModule.forRoot({
      installSubscriptionHandlers: true,
      autoSchemaFile: 'schema.gql'
    })
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
