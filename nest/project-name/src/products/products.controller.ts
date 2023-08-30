// src/products/products.controller.ts

import { Controller, Get, Post, Body, Param, Put, Delete } from '@nestjs/common';
import { ProductsService } from './products.service';
import { Products } from './product.entity';

@Controller('products')
export class ProductsController {
  constructor(private readonly productService: ProductsService) {}

  @Get()
  async getAllProducts(): Promise<Products[]> {
    return await this.productService.getAllProducts();
  }


  @Get(':id')
  getProduct(@Param('id') id: number): Promise<Products> {
    return this.productService.getProduct(id);
  }

  @Post()
  createProduct(@Body() productData: Products): Promise<Products> {
    return this.productService.createProduct(productData);
  }

  @Put(':id')
  updateProduct(@Param('id') id: number, @Body() productData: Products): Promise<Products> {
    return this.productService.updateProduct(id, productData);
  }

  @Delete(':id')
  deleteProduct(@Param('id') id: number): Promise<void> {
    return this.productService.deleteProduct(id);
  }
}
