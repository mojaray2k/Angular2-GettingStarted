import { Component } from '@angular/core';
import { IProduct } from './products';

@Component({
    templateUrl: 'app/products/product-detail.component.html'
})
export class ProductDetailComponent {
    pageTitle: string;
    product: IProduct;
}
