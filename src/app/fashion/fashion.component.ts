import { Component, OnInit, Input} from '@angular/core';
import * as fashion from "src/app/fashion/fashion.json"

@Component({
  selector: 'app-fashion',
  templateUrl: './fashion.component.html',
  styleUrls: ['./fashion.component.css']
})
export class FashionComponent implements OnInit {

  constructor() { }

  @Input()product:any
  productDetail:any=(fashion as any).default;

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
      content='fa fa-plus';
    }
    else{
      content='fa fa-minus';
    }
    return content;
  }

}