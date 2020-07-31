import { NotFoundException } from '@nestjs/common';
import { Args, Mutation, Query, Resolver, Subscription } from '@nestjs/graphql';
import { PubSub } from 'apollo-server-express';
import { Basket } from './models/basket.model';
import { BasketItem } from './models/basket-item.model';
import { BasketService } from './basket.service';
// import { NewProductInput } from './dto/new-product.input';
import { BasketArgs } from './dto/basket.args';

const pubSub = new PubSub();

@Resolver(of => Basket)
export class BasketResolver {
  constructor(private readonly basketService: BasketService) {}

  // @Query(returns => Basket)
  // async product(@Args('id') id: number): Promise<Basket> {
  //   const product = await this.basketService.findOne(id);
  //   if (!product) {
  //     throw new NotFoundException(id);
  //   }
  //   return product;
  // }

  @Query(returns => [Basket])
  baskets(@Args() basketArgs: BasketArgs): Promise<Basket[]> {
    return this.basketService.findAll(basketArgs);
  }

  // @Mutation(returns => Basket)
  // async addBasket(
  //   @Args('newBasketData') newBasketData: NewBasketInput,
  // ): Promise<Basket> {
  //   const productId = await this.basketService.createAndSave(newBasketData);
  //   const product = await this.basketService.findOne(productId);
  //   pubSub.publish('productAdded', { productAdded: product });
  //   return product;
  // }
  //
  // @Mutation(returns => Boolean)
  // async removeBasket(@Args('id') id: number) {
  //   return this.basketService.remove(id);
  // }
  //
  // @Subscription(returns => Basket)
  // productAdded() {
  //   return pubSub.asyncIterator('productAdded');
  // }
}
