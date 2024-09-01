import { Injectable } from '@angular/core';
import { Cart } from '../models/cart';
import { increment, setCounter } from 'src/app/store/counter.actions';
import { Store } from '@ngrx/store';
import { MatSnackBar } from '@angular/material/snack-bar';
import { SnackInterface } from 'src/app/shared/models/snack';
import { SnackComponent } from 'src/app/shared/components/snack/snack.component';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  contadorActual: number = 0;

  private products: Cart[] = [
    
      /* {
          "id": 1,
          "name": "Loveseat Sofa",
          "img": "../../../../../assets/home/08-23-24-171408.png",
          "nestrellas": 4,
          "price": 199,
          "amount": 1
      },
      {
          "id": 2,
          "name": "Luxury Sofa",
          "img": "../../../../../assets/shop/08-31-24-160451.png",
          "nestrellas": 5,
          "price": 299,
          "amount": 1
      } */
  
  ];

  objsnack: SnackInterface = {
    mensaje: "",
    tipo: 0
  };

  constructor(
    private store: Store<{ counter: number }>,
    public snackBar: MatSnackBar,
  ) { }

  incrementarContador(): void {
    this.contadorActual++;
    this.store.dispatch(increment());
  }

  /* establecerContador(value: number): void {
    this.store.dispatch(setCounter({ value: 0 }));
  } */

  
  getProducts(): Cart[] {
    return this.products;
  }

  
  addProduct(product: Cart): void {
    let listProducts = this.products.filter( (e) => e.id ==  product.id);
    if (!(listProducts.length > 0)) {
      this.products.push(product);  
      this.incrementarContador();
    }else{
      this.products.forEach(element => {
        if (element.id == product.id) {
          element.amount += 1;
        }
      });
    }

    this.objsnack.mensaje = "Producto añadido";
    this.objsnack.tipo = 1;
    this.snackBar.openFromComponent(SnackComponent, {
      duration: 2500,
      data: this.objsnack
    });

    console.log("Carrito productos", this.products);
    
  }

  
  deleteProduct(id: number): void {
    this.products = this.products.filter((product) => product.id !== id);
  }
}
