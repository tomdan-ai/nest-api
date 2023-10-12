import { Controller, Get, Post, Put, Delete, Body, Param } from '@nestjs/common';
import { CreateItemDto } from './dto/create-item.dto';
import { ItemsService } from './items.service';
import { Item } from './interfaces/item.interfaces';

@Controller('items')
export class ItemsController {
    constructor(private readonly itemsService: ItemsService) {}

    @Get()
    async findAll(): Promise<Item[]> {
        return await this.itemsService.findAll()
    }

    @Get(':id')
    async findOne(@Param('id') id): Promise<Item> {
        return await this.itemsService.findOne(id);
    }
    
    @Delete(':id')
    deleteItem(@Param('id') id): string {
        return `Item ${id} Deleted`
    }

    @Put(':id')
    updateItem(@Body()updateItemDto: CreateItemDto, @Param('id') id): string {
        return `Update ${id}
                Name = ${updateItemDto.name}
                Description = ${updateItemDto.description}
                New Qty = ${updateItemDto.qty}
        `
    }

    @Post()
    giveAll(@Body() createItemDto: CreateItemDto): string {
        return `Name: ${createItemDto.name} Desc: ${createItemDto.description} QUantity: ${createItemDto.qty}`;
    }
}
