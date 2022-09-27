import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-counterchild',
  templateUrl: './counterchild.component.html',
  styleUrls: ['./counterchild.component.css']
})
export class CounterchildComponent implements OnInit {
  counterValue=1;
    countLessThenOne=true;

    countLessThenOne1=true;

    

    
    @Output() countEmmitter =new EventEmitter();
    
    
  
    PostValue(){
      this.countEmmitter.emit(this.counterValue);
    }
   decrement(){
    if(this.counterValue==1){
      this.countLessThenOne=false;
    }
    else{
      this.countLessThenOne=true;
      this.counterValue--;
    }
    this.PostValue();

   }
   increment(){
    if(this.counterValue>=10){
      this.countLessThenOne1=true;

    }
    else{
      this.counterValue++;
      this.countLessThenOne=true;
      this.PostValue();
    }
  }
  constructor() { }

  ngOnInit(): void {
  }

}


  