import { CheckoutComponent } from './checkout/checkout.component';
import { OrdersComponent } from './orders/orders.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';

import { LoginComponent } from './login/login.component';

import { NotfoundComponent } from './notfound/notfound.component';
import { AuthGuard } from './auth.guard';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { ProductsComponent } from './products/products.component';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';
import { CartComponent } from './cart/cart.component';
import { CategoriesComponent } from './categories/categories.component';
import { BrandsComponent } from './brands/brands.component';
import { FooterComponent } from './footer/footer.component';
import { ApexChartsComponent } from './apex-charts/apex-charts.component';

const routes: Routes = [
  {path:'',redirectTo:'products',pathMatch:'full'},
  {path:'home',canActivate:[AuthGuard],component:HomeComponent},
  {path:'login',component:LoginComponent},
  {path:'register',component:RegisterComponent},
  {path:'about',canActivate:[AuthGuard],component:AboutComponent},
  {path:'cart',canActivate:[AuthGuard],component:CartComponent},
  {path:'productdetails/:id',canActivate:[AuthGuard],component:ProductDetailsComponent},
  {path:'products',canActivate:[AuthGuard],component:ProductsComponent},
  {path:'allorders',canActivate:[AuthGuard],component:OrdersComponent},
  {path:'checkout',canActivate:[AuthGuard],component:CheckoutComponent},
  {path:'categories',canActivate:[AuthGuard],component:CategoriesComponent},
  {path:'brands',canActivate:[AuthGuard],component:BrandsComponent},
  {path:'footer',canActivate:[AuthGuard],component:FooterComponent},
  {path:'apexcharts',canActivate:[AuthGuard],component:ApexChartsComponent},
  {path:'settings',loadChildren:()=>import('./settings/settings.module').then((module)=>module.SettingsModule)},
  {path:'**',component:NotfoundComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
