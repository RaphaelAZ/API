import {Body, Controller, Delete, Get, Param, ParseIntPipe, Patch, Post} from '@nestjs/common';
import { AppService } from './app.service';
import {ProductsList} from "./products.entity";

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  async getHello(): Promise<ProductsList[]> {
    return this.appService.getAll();
  }

  @Get(':id')
  async getProduct(@Param('id', ParseIntPipe) id:number): Promise<ProductsList> {
    return this.appService.getOneById(id);
  }

  @Post()
  async postNew(@Body() newProduct) {
    await this.appService.AddProduct(newProduct);
  }

  @Delete(':id')
  async deleteOne(@Param('id', ParseIntPipe) id:number){
    await this.appService.DeleteProduct(id);
  }

  @Patch(':id')
  async updateProd(@Param('id') id:number, @Body() updProd){
    console.log("Arrivé");
    await this.appService.updateOne(id,updProd);
  }
}
