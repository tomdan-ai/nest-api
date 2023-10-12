import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ItemsController } from './items/items.controller';
import { ProductsController } from './products/products.controller'; 
import { MongooseModule } from '@nestjs/mongoose';
import config from './config/keys'

@Module({
  imports: [MongooseModule.forRoot(config.mongoURI)],
  controllers: [AppController, ItemsController, ProductsController],
  providers: [AppService],
})
export class AppModule {}
