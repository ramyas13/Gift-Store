import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-extra',
  templateUrl: './extra.component.html',
  styleUrls: ['./extra.component.css']
})
export class ExtraComponent implements OnInit {

  constructor() { }
  productDetails = [
    {
      "pid": 1,
      "image": "https://www.hdwallpaper.nu/wp-content/uploads/2017/03/gift-25.jpg",
      "pdescription":"Birthday",
      
      
    },
    {
      "pid": 2,
      "image": "https://i5.walmartimages.com/asr/7ddb3093-56d6-4a58-ac46-bab8e7a00e85_1.55be8b23dbc929fb5c4ef99ea26e9033.jpeg",
      "pdescription":"Anniversary",
    },
    {
      "pid": 3,
      "image": "https://imgcdn.floweraura.com/the-chocolateria-9914350ca-AAA.jpg",
      "pdescription":"Cakes",
      
    },
    {
      "pid": 4,
      "image": "https://imgix.bustle.com/uploads/image/2018/1/22/a06ef2c5-83a8-4194-8f7e-4419852c6a08-fotolia_100004950_subscription_monthly_m.jpg?w=1200&h=630&q=70&fit=crop&crop=faces&fm=jpg",
      "pdescription":"Chocolates",
      
      
    },
    {
      "pid": 5,
      "image": "https://th.bing.com/th/id/OIP.myiw2Eblo5zcRSLO1DQREgHaIT?pid=ImgDet&rs=1",
      "pdescription":"Flowers",
      
    },
    {
      "pid": 6,
      "image": "https://th.bing.com/th/id/OIP.mP0nRj3l_u73Si-ln4uYagHaLH?pid=ImgDet&rs=1",
      "pdescription":"Plants",
    },
    {
      "pid": 7,
      "image": "https://th.bing.com/th/id/OIP._1_R9xsn46iAfOiJNKqVhAHaHa?pid=ImgDet&rs=1",
      "pdescription":"Jewellery",
    },
    {
      "pid": 8,
      "image": "https://cdn.igp.com/f_auto,q_auto/cards/fashionable.jpg",
      "pdescription":"Bags",
    }
  ]

  ngOnInit(): void {
  }

}
