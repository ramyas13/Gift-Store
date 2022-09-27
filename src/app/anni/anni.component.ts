import { Component, OnInit, Input } from '@angular/core';
import * as anni from "src/app/anni/anni.json"
@Component({
  selector: 'app-anni',
  templateUrl: './anni.component.html',
  styleUrls: ['./anni.component.css']
})
export class AnniComponent implements OnInit {

  constructor() { }

  @Input()product:any

  ngOnInit(): void {
  }
  //Toggle effect to show and hide the pdescription and price
  //Property for toggle effect
  productDetails=false;
  //Event to perform the toggle effect

  productDetail:any=(anni as any).default;
  showproductDetailsToggle()
  {
    this.productDetails=!this.productDetails;
  }
  //function to toggle between the span content from + to - and vice versa
  //and bind the function to [ngClass]
  toggleContent(){
    var content='';
    if(this.productDetails){
      content='fa fa-plus';
    }
    else{
      content='fa fa-minus';
    }
    return content;
  }

}



