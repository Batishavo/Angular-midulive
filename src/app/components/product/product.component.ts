import { Component, Input } from '@angular/core';
import { Prodcuct } from '../../models/product.models';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent {
  @Input() product!:Prodcuct ;
}
