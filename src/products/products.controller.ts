import { Controller, Get, Post, Body } from '@nestjs/common';
import { ProductDto } from './dto/product.dto';

@Controller('products')
export class ProductsController {
    @Get()
    findAll(): string {
        return 'This shows all products'
    }

    @Post()
    addProduct(@Body() productPost: ProductDto): string {
        return `Product Name: ${productPost.name}
                Product Category: ${productPost.categoty}
                Product Quantity: ${productPost.quantity}
                Sale Status: ${productPost.sold}
        `;
    }
}
