import { Component, OnInit } from '@angular/core';
import * as alldeals from "../home.json";

@Component({
  selector: 'app-homeone',
  templateUrl: './homeone.component.html',
  styleUrls: ['./homeone.component.css']
})
export class HomeoneComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  all:any=(alldeals as any).default;
}
