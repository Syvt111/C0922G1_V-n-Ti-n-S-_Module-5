import {Injectable} from '@angular/core';
import {Product} from '../model/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor() {
  }

  products: Product[] = [{
    id: 1,
    name: 'Iphone 12',
    price: 24000000,
    description: 'New'
  }, {
    id: 2,
    name: 'IPhone 11',
    price: 1560000,
    description: 'Like new'
  }, {
    id: 4,
    name: 'IPhone 8',
    price: 7540000,
    description: '98%'
  }, {
    id: 5,
    name: 'IPhone 11 Pro',
    price: 1895000,
    description: 'Like new'
  }
  ];

  getAll() {
    return this.products;
  }

  findById(id: number) {
    return this.products.filter(item => item.id === id)[0];
  }

  save(product) {
    this.products.push(product);
  }

  updateById(updateProduct: Product) {
    this.products = this.products.map(item => {
      if ( updateProduct.id === item.id) {
        return updateProduct;
      } else {
        return item;
      }
    });
  }

  delete(id: number) {
    return this.products = this.products.filter(product => product.id !== id);
  }
}
