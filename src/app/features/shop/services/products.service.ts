import { Injectable } from '@angular/core';
import { Product } from '../models/product';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  private products: Product[] = [
    { id: 1, img: '../../../../../assets/home/08-23-24-171408.png', name: 'Loveseat Sofa', nestrellas: 4, price: 199.00, category: 1 },
    { id: 2, img: '../../../../../assets/shop/08-31-24-160451.png', name: 'Luxury Sofa', nestrellas: 5, price: 299.00, category: 2 },
    { id: 3, img: '../../../../../assets/home/08-25-24-151958.png', name: 'Table Lamp', nestrellas: 4, price: 19.00, category: 2 },
    { id: 4, img: '../../../../../assets/shop/08-31-24-160527.png', name: 'White Drawer unit', nestrellas: 4, price: 89.00, category: 1 },
    { id: 5, img: '../../../../../assets/shop/08-31-24-160700.png', name: 'Black Tray table', nestrellas: 4, price: 19.00, category: 6 },
    { id: 6, img: '../../../../../assets/shop/08-31-24-160725.png', name: 'Lamp', nestrellas: 5, price: 39.00, category: 1 },
    { id: 7, img: '../../../../../assets/shop/08-31-24-160750.png', name: 'Light Beige Pillow', nestrellas: 4, price: 3.99, category: 2 },
    { id: 8, img: '../../../../../assets/home/08-25-24-152018.png', name: 'Table Lamp', nestrellas: 4, price: 39.99, category: 1 },
    { id: 9, img: '../../../../../assets/home/08-25-24-152032.png', name: 'Bamboo Basket', nestrellas: 4, price: 9.99, category: 6 },
  ];

  constructor() { }

  
  getProducts(): Product[] {
    return this.products;
  }

  
  addProduct(product: Product): void {
    this.products.push(product);
  }

  
  deleteProduct(id: number): void {
    this.products = this.products.filter((product) => product.id !== id);
  }
}
