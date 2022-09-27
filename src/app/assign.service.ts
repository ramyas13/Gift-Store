import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Assign } from './assign';

@Injectable({
  providedIn: 'root'
})
export class AssignService {

  constructor() { }
  assign:Assign[] = [
    {
        id:1,
       id1:'Birthday',
       id2:'Anniversary',
       id3:'Chocolates',
       id4:'Cakes',
       id5:'ajio',
       id6:'ajio',
       id7:'ajio',
       id8:'ajio',
       id9:'ajio',
       id10:'ajio',
       id11:'ajio',
       id12:'ajio',
       id13:'ajio'      


    }
  ];
  public getAssignDetails():any{
    const assignObservable=new Observable(observe=>{
      setTimeout(()=>{
        observe.next(this.assign);
      }, 500);
      });
      return assignObservable;
  }
}


