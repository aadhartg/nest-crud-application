import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";

export type ProductDocument = Product & Document;

@Schema({
    timestamps: true
})
export class Product implements ProductInterface{
    @Prop()
    title: string;

    @Prop()
    description: string;

    @Prop()
    price: string;

}

export const ProductSchema = SchemaFactory.createForClass(Product);

export interface ProductInterface{
    title:string;
    description: string;
    price:string;
}

