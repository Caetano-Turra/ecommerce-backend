import { Body, Controller, Delete, Get, HttpCode, HttpException, HttpStatus, Param, ParseUUIDPipe, Post, Put } from "@nestjs/common";
import { Category } from "./brand.entity";
import { CategoryService } from "./category.service";

@Controller('categories')
export class CategoryController {

    constructor(private service: CategoryService) {}

    @Get()
    findAll(): Promise<brand[]>{
        return this.service.findAll();
    }

    @Get(':id')
    async findById(@Param('id', ParseUUIDPipe)id: string): Promise<brand>{
        const found = await this.service.findById(id);

        if (!found) {
            throw new HttpException('brand not found', HttpStatus.NOT_FOUND);
        }

        return found;
    }

    @Post()
    create(@Body() category: brand) : Promise<brand> {
        return this.service.save(category);
    }

    @Put('id')
    async update(@Param('id', ParseUUIDPipe)id: string, @Body() category: brand) : Promise<brand> {
        const found = await this.service.findById(id);

        if (!found) {
            throw new HttpException('brand not found', HttpStatus.NOT_FOUND);
        }
        
        category.id = id;

        return this.service.save(category);
    }

    @Delete('id')
    @HttpCode(204)
    async remove(@Param('id', ParseUUIDPipe)id: string): Promise<void> {
        const found = await this.service.findById(id);

        if (!found) {
            throw new HttpException('brand not found', HttpStatus.NOT_FOUND);
        }

        return this.service.remove(id);
    }
}