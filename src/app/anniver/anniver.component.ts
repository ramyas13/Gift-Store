import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-anniver',
  templateUrl: './anniver.component.html',
  styleUrls: ['./anniver.component.css']
})
export class AnniverComponent implements OnInit {

  constructor() { }

  mycolor = 'black';
  
  productDetails = [
    {
      "pid": 1,
      "pname":"Wooden Lamp with love quotes",
      "price":495,
      "image": "https://cdn.igp.com/f_auto,q_auto,t_pnopt8prodlp/products/p-wooden-lamp-with-love-quotes-109772-m.jpg",
      "status": "Instock",
      
    },
    {
      "pid": 2,
      "pname":"Personalized Photo of your choice",
      "price":550,
      "image": "https://cdn.igp.com/f_auto,q_auto,t_pnopt12prodlp/products/p-personalized-anniversary-photo-canvas-140014-m.jpg",
      "status": "Out of Stock",
    },
    {
      "pid": 3,
      "pname":"You & Me Personalized Mobile Stand",
      "price":345,
      "image": "https://cdn.igp.com/f_auto,q_auto,t_pnopt6prodlp/products/p-you-me-personalized-mobile-stand-131195-m.jpg",
      "status": "Instock",
      
    },
    {
      "pid": 4,
      "price":575,
      "pname":"Love Always",
      "image": "https://cdn.igp.com/f_auto,q_auto,t_pnopt6prodlp/products/p-love-always-personalized-led-satin-cushion-148958-m.jpg",
      "status": "Out of Stock",
      
      
    },
    {
      "pid": 5,
      "price":1545,
      "pname":"Roses Gift Box",
      "image": "https://cdn.igp.com/f_auto,q_auto,t_pnopt6prodlp/products/p-aromatic-temptations-dry-fruits-and-roses-gift-box-141392-m.jpg",
      "status": "Out of Stock",
      
    },
    {
      "pid": 6,
      "price":2195,
      "pname":"The Good Life Gift Hamper",
      "image": "https://cdn.igp.com/f_auto,q_auto,t_pnopt6prodlp/products/p-the-good-life-gift-hamper-141362-m.jpg",
      "status": "Instock",
      
    },
    {
      "pid": 7,
      "price":1495,
      "pname":"Chic Black Accessories Gift Set",
      "image": "https://cdn.igp.com/f_auto,q_auto,t_pnopt6prodlp/products/p-chic-black-accessories-gift-set-187382-m.jpg",
      "status": "Instock",
      
    },
    {
      "pid": 8,
      "price":1325,
      "pname":"7-Slot Gold Leather Organizer With Lid",
      "image": "https://cdn.igp.com/f_auto,q_auto,t_pnopt6prodlp/products/p-7-slot-gold-leather-organizer-with-lid-177148-m.jpg",
      "status": "Out of Stock",
      
    },
    {
      "pid": 9,
      "price":4245,
      "pname":"Floral Hand Block Dohar",
      "image": "https://cdn.igp.com/f_auto,q_auto,t_pnopt6prodlp/products/p-floral-hand-block-print-reversible-double-dohar-149214-m.jpg",
      "status": "Instock",
      
    }
  ]
    

  
  

  ngOnInit(): void {
  }

}



