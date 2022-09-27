import { Component, OnInit ,Input} from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  //property - _productname
  _productname:any | undefined;

  //To pass information between components we have @Input and @Output

  @Input('product') //Laptop
  //write
  set pname(pname:any) {//Laptop{}
  if(pname)
  {
    //this._productname=pname || 'not found';
    //alert("The product" + " " + pname + " " + "is available");
  }
  else{
    //alert("The product" + " " + pname + " " + "is not available");
  }
}
  //read
  get pname():string
  {
    return this._productname;
  }
}