import { Search } from "@nestjs/common";
import { Field, ObjectType } from "@nestjs/graphql";
import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";

export type PostDocument = Post & Document;

@Schema({
    timestamps: true,
})
export class Post implements PostInterface {
    @Prop({
        type: String,
        required: true,
    })
    title: string;

    @Prop({type: String})
    comment: string;

    @Prop({type:String})
    owner: string;
}

export const PostSchema = SchemaFactory.createForClass(Post);


export interface PostInterface{
    title: string,
    comment:string,
    owner: string;
}

@ObjectType()
export class PostGraphqlOutput implements PostInterface {
    @Field((type) => String)
    title: string;
  
    @Field((type) => String)
    comment: string;
  
    @Field((type) => String)
    owner: string;
  }