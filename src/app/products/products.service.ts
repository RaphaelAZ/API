import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  private Product:any = [];
  private l_id: any;

  constructor(private httpClient: HttpClient) {}

  getProducts(){
    return this.httpClient.get("http://localhost:3000/");
  }

  saveProduct(data: any){
    return this.httpClient.post("http://localhost:3000/",data);
  }

  delProduct(id: number){
    return this.httpClient.delete("http://localhost:3000/"+id);
  }

  updateProduct(id: number, data: any){
    return this.httpClient.put("http://localhost:3000/"+id+'/',data);
  }

  setID(id: number){
    this.l_id=id;
  }

  getID(){
    return this.l_id;
  }

  setProd(prodid: number, prodname: string, prodorigin: string, prodstate: string, prodstock: string){
    this.Product.push(prodid,prodname,prodorigin,prodstate,prodstock);
  }

  getProd(){
    return this.Product;
  }
}
