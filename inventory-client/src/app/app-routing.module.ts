import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductListComponent } from './product-list/product-list.component';
import { CreateProductComponent } from './create-product/create-product.component';
import {ProdutDetailsComponent  } from "./produt-details/produt-details.component";
import {UpdateProductComponent  } from "./update-product/update-product.component";
const routes: Routes = [{ path: '', redirectTo: 'product', pathMatch: 'full' },
{ path: 'products', component: ProductListComponent },
{ path: 'add', component: CreateProductComponent },
{ path: 'details/:id', component: ProdutDetailsComponent },
{ path: 'update/:id', component: UpdateProductComponent },];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
