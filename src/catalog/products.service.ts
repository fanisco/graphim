import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Product, IProductChangableFields } from './product.entity';

@Injectable()
export default class ProductsService {
  constructor(
    @InjectRepository(Product)
    private productsRepository: Repository<Product>
  ) {}

  async createAndSave(props: IProductChangableFields): Promise<number> {
    const product = new Product();
    product.title = props.title;
    product.descr = props.descr;
    product.price = props.price;
    await this.productsRepository.save(product);
    return product.id;
  }

  findOne(id: number): Promise<Product> {
    return this.productsRepository.findOne(id);
  }

  findAll(): Promise<Product[]> {
    return this.productsRepository.find();
  }

  async update(id: number, props: IProductChangableFields): Promise<void> {
      const product = await this.findOne(id);
      if (props.title !== undefined && props.title !== null) {
        product.title = props.title;
      }
      if (props.descr !== undefined && props.descr !== null) {
        product.descr = props.descr;
      }
      if (props.price !== undefined && props.price !== null) {
        product.price = props.price;
      }
      await this.productsRepository.save(product);
  }

  async remove(id: number): Promise<void> {
    await this.productsRepository.delete(id);
  }
}
