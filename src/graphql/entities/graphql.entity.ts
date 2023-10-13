import { ObjectType, Field, Int } from "@nestjs/graphql";
import { InputType } from '@nestjs/graphql';

@ObjectType()
export class Product implements ProductInterface {
    @Field((type) => String)
    title: string;

    @Field((type) => String)
    description: string;

    @Field((type) => Int)
    price: number;

}

export interface ProductInterface {
  title: string;
  description: string;
  price: number;
}


