import { Component, Input, OnInit } from '@angular/core';
import { CartService } from '../cart.service';
import { Cartitem } from '../cartitem';
import Swal from 'sweetalert2';
import * as home from "src/app/home/home.json"


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private cartsvc:CartService) { }

  cart:Cartitem={
    pid:0,
    pname:'',
    pdescription:'',
    price:0,
    img:'',
    quantity:1,
    totalPrice:1    
  }
  quantity:number=1;

  addToCart(product:any){
    this.cart.pname=product.pname;
    this.cart.pdescription=product.pdescription;
    this.cart.price=product.price;
    this.cart.img=product.img;
    this.cart.price=product.price;
    this.cart.totalPrice=product.totalPrice;
    this.cart.quantity=this.quantity;
    this.cart.pid=product.id;
    this.cartsvc.addToCart(this.cart);
    console.log(product.id);
    const Toast = Swal.mixin({
      toast: true,
      position: 'top',
      showConfirmButton: false,
      timer: 3000,
      timerProgressBar: true,
    })

    Toast.fire({
      icon: 'success',
      title: 'Item added successfully'
    })
    this.cartsvc.getCount();

    
  
  }

  @Input()product:any

  productDetail:any=(home as any).default;

  ngOnInit(): void {
  }
  //Toggle effect to show and hide the pdescription and price
  //Property for toggle effect
  productDetails=false;
  //Event to perform the toggle effect
  showproductDetailsToggle()
  {
    this.productDetails=!this.productDetails;
  }
  //function to toggle between the span content from + to - and vice versa
  //and bind the function to [ngClass]
  toggleContent(){
    var content='';
    if(this.productDetails){
      content='fa-solid fa-down-long';
    }
    else{
      content='fa-solid fa-eye-slash';
    }
    return content;
  }

}

