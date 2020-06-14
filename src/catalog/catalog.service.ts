import { Injectable, NotFoundException } from '@nestjs/common';
import Product, { IProductChangableFields } from './product.entity';

@Injectable()
export default class CatalogService {
    products: Product[] = [];

    addSingleProduct({title, descr, price}: IProductChangableFields): number {
        const id = Math.ceil(Math.random() * 100000);
        const product = new Product(id, title, descr, price);
        this.products.push(product);
        return id;
    }

    getSingleProduct(id: number): Product {
        const [product] = this.findProduct(id);
        return product;
    }

    updateSingleProduct(id: number, {title, descr, price}: IProductChangableFields): void {
        const [product, index] = this.findProduct(id);
        this.products[index] = {
            ...product,
            ...{title, descr, price}
        };
    }

    deleteSingleProduct(id: number): void {
        const [product, index] = this.findProduct(id);
        delete this.products[index];
    }

    getAllProducts(): Product[] {
        return [...this.products];
    }

    private findProduct(id: number): [Product, number] {
        const index = this.products.findIndex(product => product.id === id);
        const product = this.products[index];
        if (!product) {
            throw new NotFoundException(`Couldn't find object wid id ${id}.`);
        }
        return [product, index];
    }
}
