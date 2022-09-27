import { Component, OnInit } from '@angular/core';
import * as alldeals from "../fashion.json";

@Component({
  selector: 'app-fashionone',
  templateUrl: './fashionone.component.html',
  styleUrls: ['./fashionone.component.css']
})
export class FashiononeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  all:any=(alldeals as any).default;
}
