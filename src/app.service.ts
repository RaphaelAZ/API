import {Injectable} from '@nestjs/common';
import {InjectRepository} from "@nestjs/typeorm";
import {DeleteResult, Repository} from "typeorm";
import {ProductsList} from "./products.entity";

@Injectable()
export class AppService {
  constructor(@InjectRepository(ProductsList) private productRepository: Repository<ProductsList>) {
  }

  getAll(): Promise<ProductsList[]>{ // SELECT * FROM ProductsList
    return this.productRepository.find({select: ["id", "name", "state", "origin", "stock"]});
  }

  AddProduct(_newProd: ProductsList){ // INSERT PRODUCT
    const newProd = this.productRepository.create(_newProd);
    return this.productRepository.save(_newProd);
  }

  async updateOne(id: number, updProd: ProductsList) { //UPDATE PRODUCT
    return await this.productRepository.update({
      id,
    }, {
      name: updProd.name,
      state: updProd.state,
      stock: updProd.stock,
      origin: updProd.origin,
    });
  }

  getOneById(id: number): Promise<ProductsList> { //SELECT ONE PRODUCT
      return this.productRepository.findOneOrFail(id);
  }

  async DeleteProduct(id: number): Promise<DeleteResult>{ //DROP ONE PRODUCT
    return this.productRepository.delete(id);
  }
}
