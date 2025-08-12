import { Controller, Get, Param, ParseUUIDPipe } from "@nestjs/common";
import { CategoryService } from "./category.service";
import { Category } from "./category.entity";

@Controller('categories')
export class CategoryController {

    constructor(private service: CategoryService) {}

    @Get()
    findAll(): Promise<Category[]> {
        return this.service.findAll();  
    }

    @Get(':id')
    findById(@Param('id', ParseUUIDPipe) id: string): Promise<Category> {
        return this.service.findById(id);
    }
}