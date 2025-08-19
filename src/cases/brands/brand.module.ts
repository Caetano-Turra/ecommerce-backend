import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Category } from "./brand.entity";
import { CategoryService } from "./category.service";
import { CategoryController } from "./brands.controller";

@Module({
    imports: [TypeOrmModule.forFeature([Category])],
    providers: [CategoryService],
    controllers: [CategoryController]
})
export class CategoryModule{}