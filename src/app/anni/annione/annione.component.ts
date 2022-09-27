import { Component, OnInit } from '@angular/core';
import * as alldeals from "../anni.json";
@Component({
  selector: 'app-annione',
  templateUrl: './annione.component.html',
  styleUrls: ['./annione.component.css']
})
export class AnnioneComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  all:any=(alldeals as any).default;
}
