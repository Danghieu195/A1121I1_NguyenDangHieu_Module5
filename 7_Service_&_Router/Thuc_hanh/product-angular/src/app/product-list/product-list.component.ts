import { Component, OnInit } from '@angular/core';
import {ServiceProductService} from "../productService/service-product.service";

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  constructor( private productService: ServiceProductService) { }

  ngOnInit(): void {
  }

}
