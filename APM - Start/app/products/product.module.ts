
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { ProductFilterPipe } from './product-filter.pipe';
import { ProductDetailComponent } from './product-detail.component';
import { ProductListComponent } from './product-list.component';
import { ProductDetailGuard } from './../products/product-guard.service';
import { ProductService } from './product.service';
import { StarComponent } from './../shared/star.component';

@NgModule({
    declarations: [
        ProductListComponent,
        ProductDetailComponent,
        ProductFilterPipe,
        StarComponent
    ],
    imports: [
        FormsModule,
        CommonModule,
        RouterModule.forChild([
            { path: 'products', component: ProductListComponent },
              { path: 'product/:id',
                canActivate: [ ProductDetailGuard ],
                component: ProductDetailComponent }
        ])
    ],
    providers: [
        ProductService,
        ProductDetailGuard
    ],
})
export class ProductModule {}
