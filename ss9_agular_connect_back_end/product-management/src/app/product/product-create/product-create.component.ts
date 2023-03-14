import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {ProductService} from '../../service/product.service';
import {Router} from "@angular/router";
import {CategoryService} from "../../service/category.service";
import {Category} from "../../model/category";

@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.css']
})
export class ProductCreateComponent implements OnInit {
  productForm: FormGroup = new FormGroup({
    id: new FormControl(),
    name: new FormControl(),
    price: new FormControl(),
    description: new FormControl(),
    category: new FormControl(),
  });
  categories : Category[];

  constructor(private productService: ProductService,
              private categoryService: CategoryService,
              private router : Router) {
  }

  ngOnInit() {
    this.findAllCategory();
  }

  submit() {
    const product = this.productForm.value;
    this.productService.saveCategory(product).subscribe(() => {
      this.router.navigate(['/product/list']);
      alert('Tạo thành công');
    }, e => {
      console.log(e);
    });
  }

  private findAllCategory() {
    this.categoryService.getAll().subscribe(categories => {
      this.categories = categories;
    });
  }
}
