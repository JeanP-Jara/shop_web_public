import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SignInComponent } from './features/auth/components/sign-in/sign-in.component';
import { SignUpComponent } from './features/auth/components/sign-up/sign-up.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HeaderComponent } from './shared/components/header/header.component';
import { HomeComponent } from './features/home/components/home/home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from  '@angular/common/http';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatMenuModule} from '@angular/material/menu';
import {MatSidenavModule} from '@angular/material/sidenav';
import { AllComponent } from './features/home/components/all/all.component';
import { FooterComponent } from './shared/components/footer/footer.component';
import {MatDividerModule} from '@angular/material/divider';
import {MatInputModule} from '@angular/material/input';
import { ShopPageComponent } from './features/shop/components/shop-page/shop-page.component';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { FormsModule } from '@angular/forms';
import { ContactComponent } from './features/contact/components/contact/contact.component';
import { GoogleMapsModule } from '@angular/google-maps';
import { CartPageComponent } from './features/shop/components/cart-page/cart-page.component';
import { ProductPageComponent } from './features/shop/components/product-page/product-page.component';
import {MatStepperModule} from '@angular/material/stepper';
import {MatRadioModule} from '@angular/material/radio';
import {MatBadgeModule} from '@angular/material/badge';
import { StoreModule } from '@ngrx/store';
import { counterReducer } from './store/counter.reducer';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { SnackComponent } from './shared/components/snack/snack.component';
import { DialogComponent } from './shared/components/dialog/dialog.component';
import {MatDialogModule} from '@angular/material/dialog';


@NgModule({
  declarations: [
    AppComponent,
    SignInComponent,
    SignUpComponent,
    HeaderComponent,
    HomeComponent,
    AllComponent,
    FooterComponent,
    ShopPageComponent,
    ContactComponent,
    CartPageComponent,
    ProductPageComponent,
    SnackComponent,
    DialogComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatMenuModule,
    MatSidenavModule,
    MatDividerModule,
    MatInputModule,
    MatCheckboxModule, 
    FormsModule,
    GoogleMapsModule,
    MatStepperModule,
    MatRadioModule,
    MatBadgeModule,
    StoreModule.forRoot({ counter: counterReducer }),
    MatSnackBarModule,
    MatDialogModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
