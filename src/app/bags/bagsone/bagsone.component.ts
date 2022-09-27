import { Component, OnInit } from '@angular/core';
import * as alldeals from "../bags.json";
@Component({
  selector: 'app-bagsone',
  templateUrl: './bagsone.component.html',
  styleUrls: ['./bagsone.component.css']
})
export class BagsoneComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  all:any=(alldeals as any).default;
}
