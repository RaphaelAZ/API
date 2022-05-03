import { Component, OnInit } from '@angular/core';
import {delay, isObservable, Observable} from "rxjs";
import {ProductsService} from "./products.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  products$: Observable<any> | undefined;

  constructor(private productsServ: ProductsService, private router: Router) { }

  ngOnInit(): void {
    this.products$ = this.productsServ.getProducts();
  }

  Add(value: ProductsService){
    console.log(value);
    this.productsServ.saveProduct(value).subscribe((result)=>{
      console.warn(result);
    });
  }

  Del(id: number): void{
    console.log(id);
    this.productsServ.delProduct(id).subscribe((result)=>{
      console.warn(result);
    })
  }

  Upd(id: number) {
    this.products$?.forEach((value) => {
      let productid;
      let productname;
      let productorigin;
      let productstate;
      let productstock;
      for (let i = 0; i < value.length; i++) {
        if (value[i].id === id) {
          productid = value[i].id;
          productname = value[i].name;
          productstate = value[i].state;
          productorigin = value[i].origin;
          productstock = value[i].stock;
          this.productsServ.setID(value[i].id);
          this.productsServ.setProd(productid, productname, productorigin, productstate, productstock);
          this.router.navigate(['/update']);
        }
      }
    });
  }
}
