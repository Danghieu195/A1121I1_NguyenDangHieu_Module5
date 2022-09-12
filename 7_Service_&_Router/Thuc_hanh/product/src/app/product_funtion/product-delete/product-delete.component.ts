import { Component, OnInit } from '@angular/core';
import {Product} from "../../model/product";
import {FormControl, FormGroup} from "@angular/forms";
import { ProductService } from 'src/app/service/product.service';
import {ActivatedRoute, ParamMap, Router} from "@angular/router";

@Component({
  selector: 'app-product-delete',
  templateUrl: './product-delete.component.html',
  styleUrls: ['./product-delete.component.css']
})
export class ProductDeleteComponent implements OnInit {

  product : Product;
  productDeleteForm : FormGroup;

  constructor(
    private productService: ProductService,
    private activatedRoute : ActivatedRoute,
    private router : Router
  ) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe((paramMap: ParamMap) => {
      const id = Number(paramMap.get('id'));
      this.product = this.productService.findProductById(id);
    })

    this.productDeleteForm = new FormGroup({
      id: new FormControl(),
      name: new FormControl(),
      price: new FormControl(),
      description: new FormControl(),
    })

    this.productDeleteForm.setValue({
      id: this.product.id,
      name: this.product.name,
      price: this.product.price,
      description: this.product.description,
    })
  }

    onSubmit() {
      this.productService.deleteProductById(this.product.id);
      this.router.navigateByUrl('/product/list').then(r => console.log('back to list!'));
    }
}
