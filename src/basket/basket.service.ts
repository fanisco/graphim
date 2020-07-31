import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Basket } from './models/basket.model';
import { BasketItem } from './models/basket-item.model';
import { ProductsService } from '../catalog/products.service';
import { BasketArgs } from './dto/basket.args';

@Injectable()
export class BasketService {
  constructor(
    @InjectRepository(Basket)
    private basketsRepository: Repository<Basket>,
    @InjectRepository(BasketItem)
    private basketItemsRepository: Repository<BasketItem>,
    private productsService: ProductsService
  ) {}

  async putToBasket(productId: number, amount: number): Promise<number> {
    const basket = await this.initBasket();
    // const product = await this.productsService.findOne(productId);
    const basketItem = new BasketItem();
    // basketItem.basket = basket;
    // basketItem.product = product;
    basketItem.amount = amount;
    // basket.items.push(basketItem);
    this.basketItemsRepository.save(basketItem);
    this.basketsRepository.save(basket);
    return basket.id;
  }

  async initBasket(): Promise<Basket> {
    let basket = await this.basketsRepository.findOne(1, {relations: ['items', 'items.product']});
    if (!basket) {
        basket = await this.createBasket();
    }
    return basket;
  }

  async createBasket(): Promise<Basket> {
    const basket = new Basket();
    await this.basketsRepository.save(basket);
    return basket;
  }

  findAll(basketArgs: BasketArgs): Promise<Basket[]> {
    return this.basketsRepository.find();
  }

  // async update(id: number, props: any): Promise<void> {
  //     const basket = await this.findOne(id);
  //     if (props.title !== undefined && props.title !== null) {
  //       basket.title = props.title;
  //     }
  //     if (props.descr !== undefined && props.descr !== null) {
  //       basket.descr = props.descr;
  //     }
  //     if (props.price !== undefined && props.price !== null) {
  //       basket.price = props.price;
  //     }
  //     await this.BasketsRepository.save(Basket);
  // }

  async remove(id: number): Promise<void> {
    await this.basketsRepository.delete(id);
  }
}
