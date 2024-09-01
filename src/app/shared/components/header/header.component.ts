import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Cart } from 'src/app/features/shop/models/cart';
import { CartService } from 'src/app/features/shop/services/cart.service';
import { setCounter } from 'src/app/store/counter.actions';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  count: number = 0;
  counter$: Observable<number>;

  mproducts: Cart[] = [];

  constructor(
    private store: Store<{ counter: number }>
  ) { 
    this.counter$ = this.store.select('counter');
  }

  ngOnInit(): void {    
    this.establecerContador(0);
  }

  establecerContador(value: number): void {
    this.store.dispatch(setCounter({ value }));
  }

}
