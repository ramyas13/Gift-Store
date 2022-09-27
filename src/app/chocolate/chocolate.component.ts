import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-chocolate',
  templateUrl: './chocolate.component.html',
  styleUrls: ['./chocolate.component.css']
})
export class ChocolateComponent implements OnInit {

  constructor() { }

  mycolor = 'black';
  
  productDetails = [
    
    {
      "pid": 3,
      "pname":"Chocolate Box",
     "price":400,
      "image": "https://cdn.igp.com/f_auto,q_auto,t_pnopt8prodlp/products/p-sweet-delights-hamper-187834-m.jpg",
      "status": "Instock",
      
    },
    {
      "pid": 4,
      "pname":"Chocolate Hampers",
      "price":500,
      "image": "https://cdn.igp.com/f_auto,q_auto,t_pnopt8prodlp/products/p-rochers-galore-gift-178334-m.jpg",
      "status": "Out of Stock",
      
      
    },
    {
      "pid": 5,
      "pname":"Chocolate Balls",
      "price":300,
      "image": "https://cdn.igp.com/f_auto,q_auto,t_pnopt8prodlp/products/p-premium-gourmet-chocolate-truffles-pack-of-6--149207-m.jpg",
      "status": "Out of Stock",
      
    },
    {
      "pid": 6,
      "price":1000,
      "pname":"Green Chocolate Hampers",
      "image": "https://cdn.igp.com/f_auto,q_auto,t_pnopt8prodlp/products/p-indulgence-galore-hamper-187621-m.jpg",
      "status": "Instock",
      
    },
    {
      "pid": 7,
      "price":800,
      "pname":"Choco Boxes",
      "image": "https://cdn.igp.com/f_auto,q_auto,t_pnopt8prodlp/products/p-gift-tray-of-deliciousness-170171-m.jpg",
      "status": "Instock",
      
    },
    {
      "pid": 8,
      "price":500,
      "pname":"Chocolate Boxes",
      "image": "https://cdn.igp.com/f_auto,q_auto,t_pnopt8prodlp/products/p-vibrant-celebrations-hamper-187833-m.jpg",
      "status": "Out of Stock",
      
    },
    {
      "pid": 9,
      "price":600,
      "pname":"Chocolate Boxes",
      "image": "https://cdn.igp.com/f_auto,q_auto,t_pnopt8prodlp/products/p-flavoured-dry-fruits-and-chocolates-in-metal-basket-144170-m.jpg",
      "status": "Instock",
      
    },
    {
      "pid": 10,
      "price":400,
      "pname":"Chocolate Boxes",
      "image": "https://cdn.igp.com/f_auto,q_auto,t_pnopt8prodlp/products/p-romance-personalized-photo-keychain-with-chocolates-148953-m.jpg",
      "status": "Instock",
      
    },
    {
      "pid": 11,
      "price":900,
      "pname":"Chocolate Boxes",
      "image": "https://cdn.igp.com/f_auto,q_auto,t_pnopt8prodlp/products/p-indulgent-treats-hamper-187835-m.jpg",
      "status": "Instock",
      
    },
    {
      "pid": 12,
      "price":1000,
      "pname":"Chocolate Boxes",
      "image": "https://cdn.igp.com/f_auto,q_auto,t_pnopt8prodlp/products/p-crazy-about-chocolates-gift-tray-170167-m.jpg",
      "status": "Instock",
      
    },
    {
      "pid": 13,
      "price":700,
      "pname":"Chocolate Boxes",
      "image": "https://cdn.igp.com/f_auto,q_auto,t_pnopt8prodlp/products/p-berry-and-chocolates-gift-pack-144926-m.jpg",
      "status": "Instock",
      
    },
    {
      "pid": 14,
      "price":650,
      "pname":"Chocolate Boxes",
      "image": "https://cdn.igp.com/f_auto,q_auto,t_pnopt12prodlp/products/p-chocolates-aplenty-gift-tray-170162-m.jpg",
      "status": "Instock",
      
    }
   
  ]

  
  

  ngOnInit(): void {
  }

}


