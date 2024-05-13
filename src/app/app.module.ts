import { RegisterComponent } from './register/register.component';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { ProductsComponent } from './products/products.component';
import { MainSliderComponent } from './main-slider/main-slider.component';
import { SearchProductPipe } from './search-product.pipe';
import { CommonModule } from '@angular/common';
import { CartComponent } from './cart/cart.component';
import { BrandsComponent } from './brands/brands.component';
import { FooterComponent } from './footer/footer.component';
import { ToastrModule } from 'ngx-toastr';
import { CategoriesComponent } from './categories/categories.component';
import { OrdersComponent } from './orders/orders.component';
import { NgApexchartsModule } from 'ng-apexcharts';
import { ApexChartsComponent } from './apex-charts/apex-charts.component';
import { DarkModeComponent } from './dark-mode/dark-mode.component';
import { DarkModeService } from './dark-mode.service';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { CheckoutComponent } from './checkout/checkout.component';
export function httpTranslateLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    AboutComponent,
    CartComponent,
    BrandsComponent,
    NotfoundComponent,
    NavbarComponent,
    FooterComponent,
    ProductDetailsComponent,
    ProductsComponent,
    MainSliderComponent,
    SearchProductPipe,
    CategoriesComponent,
    OrdersComponent,
    ApexChartsComponent,
    DarkModeComponent,
    CheckoutComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule,
    BrowserAnimationsModule,
    CarouselModule,
    FormsModule,
    CommonModule,
    BrowserAnimationsModule, // required animations module
    ToastrModule.forRoot(), // ToastrModule added
    NgApexchartsModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: httpTranslateLoaderFactory,
        deps: [HttpClient]
      }
    })

  ],
  
  providers: [DarkModeService],  //add interceptor
  bootstrap: [AppComponent],
})
export class AppModule {}
