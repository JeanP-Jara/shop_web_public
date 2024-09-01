import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignInComponent } from './features/auth/components/sign-in/sign-in.component';
import { HomeComponent } from './features/home/components/home/home.component';
import { SignUpComponent } from './features/auth/components/sign-up/sign-up.component';
import { AllComponent } from './features/home/components/all/all.component';
import { ShopPageComponent } from './features/shop/components/shop-page/shop-page.component';
import { ContactComponent } from './features/contact/components/contact/contact.component';
import { CartPageComponent } from './features/shop/components/cart-page/cart-page.component';


const routes: Routes = [
  { path:'sign-in',component:SignInComponent},
  { path:'',
    component:AllComponent,
    children: [
      { path: '', component: HomeComponent },
      { path: 'shop', component: ShopPageComponent},
      { path: 'contact', component: ContactComponent},
      { path: 'cart', component: CartPageComponent}
    ]
  },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
