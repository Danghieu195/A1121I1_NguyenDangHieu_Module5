import { Component, OnInit } from '@angular/core';
import {Product} from "../../model/product";
import {ProductService} from "../../service/product.service";
import {ActivatedRoute, ParamMap, Router} from '@angular/router';
import {FormControl, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.css']
})
export class ProductEditComponent implements OnInit {
  product : Product;

  productEditForm : FormGroup;

  constructor(
    private productService: ProductService,
    private router: Router,
    private activatedRoute : ActivatedRoute
  ) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe((paramMap : ParamMap) => {
      const id = Number(paramMap.get('id'));
      this.product = this.productService.findProductById(id);
    })

    this.productEditForm = new FormGroup({
      name : new FormControl(),
      price : new FormControl(),
      description : new FormControl()
    })

    this.productEditForm.patchValue({
      name : this.product.name,
      price : this.product.price,
      description : this.product.description,
    })
  }

  onSubmit() {
    const product = this.productEditForm.value;
    product.id = this.product.id;
    this.productService.updateProductById(this.product.id, product);
    this.router.navigateByUrl('/product/list').then(r => console.log('back to list!'));
  }
}
