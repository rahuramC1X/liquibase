// src/products/products.service.ts

import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Products } from './product.entity';

@Injectable()
export class ProductsService {
  constructor(
    @InjectRepository(Products)
    private readonly productRepository: Repository<Products>,
  ) {}

  async getAllProducts(): Promise<Products[]> {
    console.log("getProducts")
    const response =  await this.productRepository.find();
    return response;
  }

  async getProduct(id: number): Promise<Products> {
  
    return this.productRepository.findOneBy({id:id});
  }

  async createProduct(productData: Products): Promise<Products> {
    const newProduct = this.productRepository.create(productData);
    return this.productRepository.save(newProduct);
  }

  async updateProduct(id: number, productData: Products): Promise<Products> {
    await this.productRepository.update(id, productData);
    return this.getProduct(id);
  }

  async deleteProduct(id: number): Promise<void> {
    await this.productRepository.delete(id);
  }
}
