import { IsNotEmpty, IsNumber, IsString } from "class-validator";
import { ProductInterface } from '../entities/product.entity';

export class CreateProductDto implements ProductInterface{
    @IsNotEmpty()
    @IsString()
    readonly title: string;

    @IsNotEmpty()
    @IsString()
    readonly description: string;

    @IsNotEmpty()
    @IsNumber()
    readonly price: string;
}


