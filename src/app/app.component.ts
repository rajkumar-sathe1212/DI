import { Component, OnInit } from '@angular/core';
import { ApiService } from './api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

constructor(private api:ApiService) { }
products:any;

ngOnInit(): void {
    this.api.get("https://fakestoreapi.com/products").subscribe((result)=>{
      console.log(result);
      this.products = result;
    })
  }

}
