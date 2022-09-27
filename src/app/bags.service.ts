import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Bags } from './bags';
@Injectable({
  providedIn: 'root'
})
export class BagsService {

  constructor() { }

  more:Bags[] = [
    {
        pid:1,
        pname:"Special Birthday gift",
        pdescription:"Surprise your fav",
        price:500,
        img:'https://cdn.igp.com/f_auto,q_auto,t_pnopt8prodlp/products/p-trendy-spacious-handbag-for-women-155821-m.jpg'
    },
    {
      pid:1,
      pname:"Special Birthday gift",
      pdescription:"Surprise your fav",
      price:500,
      img:'https://cdn.igp.com/f_auto,q_auto,t_pnopt8prodlp/products/p-pearl-handled-clutch-bag-for-women-149420-m.jpg'
    },
    {
      pid:1,
      pname:"Special Birthday gift",
      pdescription:"Surprise your fav",
      price:500,
      img:'https://cdn.igp.com/f_auto,q_auto,t_pnopt8prodlp/products/p-blue-jane-hobo-bag-185661-m.jpg'
    },
    {
      pid:1,
      pname:"Special Birthday gift",
      pdescription:"Surprise your fav",
      price:500,
      img:'https://cdn.igp.com/f_auto,q_auto,t_pnopt8prodlp/products/p-lush-lavender-personalized-wallet-185725-m.jpg'
    },
    {
      pid:1,
      pname:"Special Birthday gift",
      pdescription:"Surprise your fav",
      price:500,
      img:'https://cdn.igp.com/f_auto,q_auto,t_pnopt8prodlp/products/p-sleek-yellow-satchel-for-women-149463-m.jpg'
    },
    {
      pid:1,
      pname:"Special Birthday gift",
      pdescription:"Surprise your fav",
      price:500,
      img:'https://cdn.igp.com/f_auto,q_auto,t_pnopt8prodlp/products/p-tan-personalized-handbag-for-women-153938-m.jpg'
    }
      ];
    
      public getBagsDetails():any{
        const moreObservable=new Observable(observe=>{
          setTimeout(()=>{
            observe.next(this.more);
          }, 500);
          });
          return moreObservable;
      }
    }

