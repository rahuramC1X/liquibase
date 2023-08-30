// src/products/product.entity.ts

import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('products')
export class Products {
  @PrimaryGeneratedColumn({name:'ProductId'})
  id: number;

  @Column({name:'ProductName'})
  name: string;

  @Column({name:'Category'})
  category: string;

  @Column({name:'Price' ,type: 'decimal', precision: 10, scale: 2 })
  price: number;

  @Column({name:'StockQuantity'})
  stockQuantity: number;

  
}
