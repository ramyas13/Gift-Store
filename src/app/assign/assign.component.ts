import { Component, OnInit } from '@angular/core';
import { Assign } from '../assign';
import { AssignService } from '../assign.service';
@Component({
  selector: 'app-assign',
  templateUrl: './assign.component.html',
  styleUrls: ['./assign.component.css']
})
export class AssignComponent implements OnInit {

  assign: Assign[]=[];

  constructor(private assignservice:AssignService) { }

  ngOnInit(): void {
    const assignObservable= this.assignservice.getAssignDetails();
    assignObservable.subscribe((assignData: Assign[])=>{
      this.assign=assignData;
    });
  }
}