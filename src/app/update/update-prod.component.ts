import { Component, OnInit } from '@angular/core';
import {ProductsService} from "../products/products.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateProdComponent implements OnInit {

  Prod:any = [];
  id = this.productsServ.getID();

  constructor(private productsServ: ProductsService, private router: Router) { }

  async ngOnInit(): Promise<void> {
    this.Prod = this.productsServ.getProd();
    console.log(this.Prod);
  }

  prepareUpd(value: ProductsService){
    this.SendUpd(this.id,value);
  }

  SendUpd(id: number,value: ProductsService){
    return this.productsServ.updateProduct(id,value);
  }

  redirection(){
    this.router.navigate(['/home']);
  }
}
