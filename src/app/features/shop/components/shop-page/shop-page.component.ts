import { Component, OnInit } from '@angular/core';
import { Task } from '../../models/task';
import { Product } from '../../models/product';
import { ProductsService } from '../../services/products.service';
import { Cart } from '../../models/cart';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-shop-page',
  templateUrl: './shop-page.component.html',
  styleUrls: ['./shop-page.component.css']
})
export class ShopPageComponent implements OnInit {

  productos: Product[] = [];
  productosAux: Product[] = [];

  constructor(
    private productService: ProductsService,
    private cartService: CartService,
  ) { }

  ngOnInit(): void {
    this.productos = this.productService.getProducts();
  }

  filterProducts(){
    let val = false;
    this.productos = this.productService.getProducts();
    this.productosAux = [];

    this.task.subtasks!.forEach(element => {
      if (element.completed) {
        this.productos.filter((e) =>  e.category == element.category).forEach(element2 => {
          this.productosAux.push( element2 );
        });
        val = true;
      }
    });

    if (this.productosAux.length > 0 || val) {
      this.productos = this.productosAux;  
    }    
  }

  generateStars(n: number): any[] {
    return Array(n);
  }

  task: Task = {
    name: 'Todos',
    completed: false,
    color: 'primary',
    category: 0,
    subtasks: [
      {name: 'Sala de estar', completed: false, color: 'primary', category: 1},
      {name: 'Dormitorio', completed: false, color: 'primary', category: 2},
      {name: 'Cocina', completed: false, color: 'primary', category: 3},
      {name: 'Baño', completed: false, color: 'primary', category: 4},
      {name: 'Comedor', completed: false, color: 'primary', category: 5},
      {name: 'Exterior', completed: false, color: 'primary', category: 6},
    ],
  };

  allComplete: boolean = false;

  updateAllComplete() {       
    this.allComplete = this.task.subtasks != null && this.task.subtasks.every(t => t.completed);
    this.filterProducts();
  }

  someComplete(): boolean {
    if (this.task.subtasks == null) {
      return false;
    }
    return this.task.subtasks.filter(t => t.completed).length > 0 && !this.allComplete;
  }

  setAll(completed: boolean) {
    console.log("sekecciona todo" , completed);    
    console.log(this.task);
    this.productos = this.productService.getProducts();
    
    this.allComplete = completed;
    if (this.task.subtasks == null) {
      return;
    }
    this.task.subtasks.forEach(t => (t.completed = completed));
  }

  /******************************* */

  filterProductPrice(){
    let val = false;
    this.productosAux = [];

    this.task2.subtasks!.forEach(element => {
      if (element.completed) {
        switch (element.category) {
          case 1:
            this.productos.filter((e) =>  e.price > 0.00 && e.price < 99.99).forEach(element2 => {
              this.productosAux.push( element2 );
            });
            break;
          case 2:
            this.productos.filter((e) =>  e.price > 100.00 && e.price < 199.99).forEach(element2 => {
              this.productosAux.push( element2 );
            });
            break;
          case 3:
            this.productos.filter((e) =>  e.price > 200.00 && e.price < 299.99).forEach(element2 => {
              this.productosAux.push( element2 );
            });
            break;
          case 4:
              this.productos.filter((e) =>  e.price > 300.00 && e.price < 399.99).forEach(element2 => {
                this.productosAux.push( element2 );
              });
              break;

          case 5:
            this.productos.filter((e) =>  e.price > 400.00 ).forEach(element2 => {
              this.productosAux.push( element2 );
            });
            break;
        
          default:
            break;
        }
        
        val = true;
      }
    });

    if (this.productosAux.length > 0 || val) {
      this.productos = this.productosAux;  
    } 
  }

  task2: Task = {
    name: 'Todos los precios',
    completed: false,
    color: 'primary',
    category: 0,
    subtasks: [
      {name: '$0.00 - 99.99', completed: false, color: 'primary', category: 1},
      {name: '$100.00 - 199.99', completed: false, color: 'primary', category: 2},
      {name: '$200.00 - 299.99', completed: false, color: 'primary', category: 3},
      {name: '$300.00 - 399.99', completed: false, color: 'primary', category: 4},
      {name: '$400.00+', completed: false, color: 'primary', category: 5},
    ],
  };

  allComplete2: boolean = false;

  updateAllComplete2() {
    this.allComplete2 = this.task2.subtasks != null && this.task2.subtasks.every(t => t.completed);
    this.filterProductPrice();
  }

  someComplete2(): boolean {
    if (this.task2.subtasks == null) {
      return false;
    }
    return this.task2.subtasks.filter(t => t.completed).length > 0 && !this.allComplete2;
  }

  setAll2(completed: boolean) {
    this.productos = this.productService.getProducts();
    this.allComplete2 = completed;
    if (this.task2.subtasks == null) {
      return;
    }
    this.task2.subtasks.forEach(t => (t.completed = completed));
    this.filterProducts();
  }

  addtocart(product: Product){
    console.log(product);

    let newProduct: Cart = {
      id: product.id,
      name: product.name,
      img: product.img,
      nestrellas: product.nestrellas,
      price: product.price,
      amount: 1
    }

    this.cartService.addProduct(newProduct);
  }

  

}
