import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cake',
  templateUrl: './cake.component.html',
  styleUrls: ['./cake.component.css']
})
export class CakeComponent implements OnInit {

  constructor() { }

  
  mycolor = 'black';
  
  productDetails = [
    {
      "pid": 1,
      "pname":"Pineapple Cake",
      "price":500,
      "image": "https://cdn.igp.com/f_auto,q_auto,t_pnopt8prodlp/products/p-special-butterscotch-cake-half-kg--109218-m.jpg",
      "status": "Instock",
      
    },
    {
      "pid": 2,
      "pname":"Chocolate Cake",
      "price":500,
      "image": "https://cdn.igp.com/f_auto,q_auto,t_pnopt8prodlp/products/p-truffle-delight-cake-half-kg--145988-m.jpg",
      "status": "Out of Stock",
    },
    {
      "pid": 3,
      "pname":"Strawbery Cake",
      "price":500,
      "image": "https://cdn.igp.com/f_auto,q_auto,t_pnopt8prodlp/products/p-pineapple-cake-with-cherry-toppings-half-kg--16988-m.jpg",
      "status": "Instock",
      
    },
    {
      "pid": 4,
      "pname":"Red Velvet",
      "price":500,
      "image": "https://cdn.igp.com/f_auto,q_auto,t_pnopt8prodlp/products/p-classic-red-velvet-cake-half-kg--109230-m.jpg",
      "status": "Out of Stock",
      
      
    },
    {
      "pid": 5,
      "pname":"Black Forest",
      "price":500,
      "image": "https://cdn.igp.com/f_auto,q_auto,t_pnopt8prodlp/products/p-black-forest-cake-half-kg--13461-m.jpg",
      "status": "Out of Stock",
      
    },
    {
      "pid": 6,
      "pname":"Choco falvour",
      "price":500,
      "image": "https://cdn.igp.com/f_auto,q_auto,t_pnopt8prodlp/products/p-finest-vanilla-cake-half-kg--135611-m.jpg",
      "status": "Instock",
      
    },
    {
      "pid": 7,
      "pname":"Biscuit Cake",
      "price":500,
      "image": "https://cdn.igp.com/f_auto,q_auto,t_pnopt8prodlp/products/p-classic-butterscotch-cake-half-kg--109215-m.jpg",
      "status": "Instock",
      
    },
    {
      "pid": 8,
      "pname":"Vanilla Cake",
      "price":500,
      "image": "https://cdn.igp.com/f_auto,q_auto,t_pnopt8prodlp/products/p-exotic-pineapple-cake-half-kg--135652-m.jpg",
      "status": "Out of Stock",
      
    },
    {
      "pid": 9,
      "pname":"Blueberry",
      "price":500,
      "image": "https://cdn.igp.com/f_auto,q_auto,t_pnopt3prodlp/products/p-delicious-chocolate-cake-with-premium-frosting-half-kg--135596-m.jpg",
      "status": "Instock",
      
    }
   
  ]

  
  

  ngOnInit(): void {
  }

}


