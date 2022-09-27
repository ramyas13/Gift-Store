import { Component, OnInit, Input} from '@angular/core';
import { CartService } from '../cart.service';
import { Cartitem } from '../cartitem';
import Swal from 'sweetalert2';
import * as birthday from "src/app/data/first.json"



@Component({
  selector: 'app-birthday',
  templateUrl: './birthday.component.html',
  styleUrls: ['./birthday.component.css']
})
export class BirthdayComponent implements OnInit {

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


  mycolor = 'black';
  
 productDetails:any=(birthday as any).default;

  ngOnInit(): void {
  }

}


