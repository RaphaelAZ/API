import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ProductsComponent} from "./products/products.component";
import {UpdateProdComponent} from "./update/update-prod.component";

const routes: Routes = [
  { path: 'home', component: ProductsComponent},
  { path: 'update', component: UpdateProdComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
