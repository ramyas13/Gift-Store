import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { CarouselComponent } from './carousel/carousel.component';
import { BirthdayComponent } from './birthday/birthday.component';
import { MoreComponent } from './more/more.component';
import { AnniComponent } from './anni/anni.component';
import { AnniverComponent } from './anniver/anniver.component';
import { ChocolateComponent } from './chocolate/chocolate.component';
import { CakeComponent } from './cake/cake.component';
import { QueryComponent } from './query/query.component';
import { HomeComponent } from './home/home.component';
import { FashionComponent } from './fashion/fashion.component';
import { BagsComponent } from './bags/bags.component';
import { RegisterComponent } from './register/register.component';
import { ProductdetailsComponent } from './productdetails/productdetails.component';
import { LoginComponent } from './login/login.component';
import { AssignComponent } from './assign/assign.component';
import { CartitemsComponent } from './cartitems/cartitems.component';
import { Login1Component } from './login1/login1.component';



const routes: Routes = [
  {path:'',component:CarouselComponent},
  {path:'birth',component:BirthdayComponent},
  {path:'more',component:MoreComponent},
  {path:'anni',component:AnniComponent},
  {path:'anniver',component:AnniverComponent},
  {path:'choco',component:ChocolateComponent},
  {path:'cake',component:CakeComponent},
  {path:'query',component:QueryComponent},
  {path:'home',component:HomeComponent},
  {path:'fashion',component:FashionComponent},
  {path:'bags',component:BagsComponent},
  {path:'register',component:RegisterComponent},
  {path:'product',component:ProductdetailsComponent},
  {path:'login',component:LoginComponent},
  {path:'assign',component:AssignComponent},
  {path:'cartitem',component:CartitemsComponent},
  {path:'login1',component:Login1Component},
  
 

  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
