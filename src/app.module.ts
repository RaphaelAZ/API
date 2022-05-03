import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import config from '../ormconfig';
import {ProductsList} from "./products.entity";

@Module({
  imports: [TypeOrmModule.forRoot(config), TypeOrmModule.forFeature([ProductsList])],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
