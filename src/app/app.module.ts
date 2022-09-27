import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SearchComponent } from './search/search.component';
import { CarouselComponent } from './carousel/carousel.component';
import { BirthdayComponent } from './birthday/birthday.component';
import { MoreComponent } from './more/more.component';
import { CounterComponent } from './counter/counter.component';
import { CounterchildComponent } from './counter/counterchild/counterchild.component';
import { AnniComponent } from './anni/anni.component';
import { AnnioneComponent } from './anni/annione/annione.component';
import { AnniverComponent } from './anniver/anniver.component';
import { ChocolateComponent } from './chocolate/chocolate.component';
import { CakeComponent } from './cake/cake.component';
import { QueryComponent } from './query/query.component';
import { HomeComponent } from './home/home.component';
import { HomeoneComponent } from './home/homeone/homeone.component';
import { AdvertisementComponent } from './advertisement/advertisement.component';
import { FashionComponent } from './fashion/fashion.component';
import { FashiononeComponent } from './fashion/fashionone/fashionone.component';
import { BagsComponent } from './bags/bags.component';
import { BagsoneComponent } from './bags/bagsone/bagsone.component';
import { AllproductsComponent } from './allproducts/allproducts.component';
import { RegisterComponent } from './register/register.component';
import { FormsModule } from '@angular/forms';
import { ProductdetailsComponent } from './productdetails/productdetails.component';
import { LoginComponent } from './login/login.component';
import { AssignComponent } from './assign/assign.component';
import { ExtraComponent } from './extra/extra.component';
import { CartitemsComponent } from './cartitems/cartitems.component';
import { OfferComponent } from './offer/offer.component';
import { Login1Component } from './login1/login1.component';




@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SearchComponent,
    CarouselComponent,
    BirthdayComponent,
    MoreComponent,
    CounterComponent,
    CounterchildComponent,
    AnniComponent,
    AnnioneComponent,
    AnniverComponent,
    ChocolateComponent,
    CakeComponent,
    QueryComponent,
    HomeComponent,
    HomeoneComponent,
    AdvertisementComponent,
    FashionComponent,
    FashiononeComponent,
    BagsComponent,
    BagsoneComponent,
    AllproductsComponent,
    RegisterComponent,
    ProductdetailsComponent,
    LoginComponent,
    AssignComponent,
    ExtraComponent,
    CartitemsComponent,
    OfferComponent,
    Login1Component,
    

    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
