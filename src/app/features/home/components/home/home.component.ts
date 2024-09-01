import { Component, OnInit } from '@angular/core';
import { Product } from '../../../shop/models/product';
import { ProductsService } from 'src/app/features/shop/services/products.service';
import { Cart } from 'src/app/features/shop/models/cart';
import { CartService } from 'src/app/features/shop/services/cart.service';
import { Store } from '@ngrx/store';
import { increment, setCounter } from 'src/app/store/counter.actions';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  productos: Product[] = []

  constructor(
    private productService: ProductsService,
    private cartService: CartService,
    
  ) { }

  ngOnInit(): void {
    this.productos = this.productService.getProducts().slice(0, 4);
  }

  generateStars(n: number): any[] {
    return Array(n);
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
