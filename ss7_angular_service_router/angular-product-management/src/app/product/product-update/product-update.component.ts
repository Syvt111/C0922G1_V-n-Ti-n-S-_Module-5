import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {ProductService} from '../../service/product.service';
import {Product} from '../../model/product';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-product-update',
  templateUrl: './product-update.component.html',
  styleUrls: ['./product-update.component.css']
})
export class ProductUpdateComponent implements OnInit {
  productUpdate: Product;
  productForm: FormGroup;

  constructor(private productService: ProductService,
              private activatedRoute: ActivatedRoute,
              private router: Router) {
  }

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe(paramMap => {
      const id = parseInt(paramMap.get('id'), 10);
      console.log(id);
      this.productUpdate = this.productService.findById(id);
    });
    this.productForm = new FormGroup({
        id: new FormControl(this.productUpdate.id),
        name: new FormControl(this.productUpdate.name),
        price: new FormControl(this.productUpdate.price),
        description: new FormControl(this.productUpdate.description)
      });
    }

    update() {
      const product = this.productForm.value;
      this.productService.updateById(product);
      this.router.navigateByUrl('/product/list');
    }
  }
