import { Component, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import{Prodcuct} from './models/product.models'
import { NgOptimizedImage } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'midudev-app';
  http = inject(HttpClient);
  products:Prodcuct[] = [];
  changeTitle(){
    this.title = 'changed';
  }
  ngOnInit(){
    this.http.get<Prodcuct[]>('https://api.escuelajs.co/api/v1/products')
    .subscribe((data:any)=>{
      this.products=data;
    });
  }
}
