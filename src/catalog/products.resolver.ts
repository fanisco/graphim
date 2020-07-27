import { NotFoundException } from '@nestjs/common';
import { Args, Mutation, Query, Resolver, Subscription } from '@nestjs/graphql';
import { PubSub } from 'apollo-server-express';
import { Product } from './models/product.model';
import { ProductsService } from './products.service';
import { NewProductInput } from './dto/new-product.input';
import { ProductsArgs } from './dto/products.args';

const pubSub = new PubSub();

@Resolver(of => Product)
export class ProductsResolver {
  constructor(private readonly productsService: ProductsService) {}

  @Query(returns => Product)
  async product(@Args('id') id: number): Promise<Product> {
    const product = await this.productsService.findOne(id);
    if (!product) {
      throw new NotFoundException(id);
    }
    return product;
  }

  @Query(returns => [Product])
  products(@Args() productsArgs: ProductsArgs): Promise<Product[]> {
    return this.productsService.findAll(productsArgs);
  }

  @Mutation(returns => Product)
  async addProduct(
    @Args('newProductData') newProductData: NewProductInput,
  ): Promise<Product> {
    const productId = await this.productsService.createAndSave(newProductData);
    const product = await this.productsService.findOne(productId);
    pubSub.publish('productAdded', { productAdded: product });
    return product;
  }

  @Mutation(returns => Boolean)
  async removeProduct(@Args('id') id: number) {
    return this.productsService.remove(id);
  }

  @Subscription(returns => Product)
  productAdded() {
    return pubSub.asyncIterator('productAdded');
  }
}
