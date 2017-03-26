

import { NgModule } from '@angular/core';
import { SharedModule } from './../shared/shared.module';
import { RouterModule } from '@angular/router';

import { ProductFilterPipe } from './product-filter.pipe';
import { ProductDetailComponent } from './product-detail.component';
import { ProductListComponent } from './product-list.component';
import { ProductDetailGuard } from './../products/product-guard.service';
import { ProductService } from './product.service';

@NgModule({
    declarations: [
        ProductListComponent,
        ProductDetailComponent,
        ProductFilterPipe
    ],
    imports: [
        SharedModule,
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
