import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { CartService } from '../../services/cart.service';
import { Cart } from '../../models/cart';
import { MatDialog } from '@angular/material/dialog';
import { DialogComponent } from 'src/app/shared/components/dialog/dialog.component';

@Component({
  selector: 'app-cart-page',
  templateUrl: './cart-page.component.html',
  styleUrls: ['./cart-page.component.css']
})
export class CartPageComponent implements OnInit {

  favoriteSeason: string = 'Envío gratis';
  seasons: any[] = [
    {content: 'Envío gratis', precio: 0.00}, 
    {content: 'Envío expreso', precio: 15.00}
  ];

  mProducts: Cart[] = [];

  total: number = 0;

  constructor(
    private _formBuilder: FormBuilder,
    private cartServices: CartService,
    public dialog: MatDialog
  ) { }

  ngOnInit(): void {
    this.mProducts = this.cartServices.getProducts();
    this.updateTotal();
  }

  updateTotal(){
    this.total = 0.0;
    this.mProducts.forEach(element => {
      let acom = element.amount * element.price;
      this.total += acom;
    });
  }

  incrementProduct(product: Cart){
    product.amount += 1;
    this.updateTotal();
  }

  decrementProduct(product: Cart){
    if ((product.amount -= 1) == 0) {
      const dialogRef = this.dialog.open(DialogComponent);

      dialogRef.afterClosed().subscribe(result => {
        console.log(`Dialog result: ${result}`);
      });
    }else{
      product.amount -= 1;
    }
    this.updateTotal();
  }

  open(){
    const dialogRef = this.dialog.open(DialogComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

  precioAdicional: number = 0.0;

  radioBtnPress(p: any){
    this.precioAdicional = p.precio
  }



}
