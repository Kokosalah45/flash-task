import { Injectable } from '@nestjs/common';
import { Product } from './interfaces/product';

@Injectable()
export class ProductsService {
  private products: Product[] = [
    {
      id: 1,
      name: 'Product 1',
      description: 'Description 1',
      price: 100,
    },
    {
      id: 2,
      name: 'Product 2',
      description: 'Description 2',
      price: 200,
    },
    {
      id: 3,
      name: 'Product 3',
      description: 'Description 3',
      price: 300,
    },
  ];

  getProducts() {
    return this.products;
  }

  getProductsByIds(ids: number[]) {
    return this.products.filter((product) => ids.includes(product.id));
  }

  getProduct(id: number) {
    return this.products.find((product) => product.id === id);
  }

  addProduct(product: Product) {
    this.products.push(product);
  }

  updateProduct(id: number, product: Product) {
    const index = this.products.findIndex((product) => product.id === id);
    this.products[index] = product;
  }

  deleteProduct(id: number) {
    this.products = this.products.filter((product) => product.id !== id);
  }
}
