import { InputType, Int, Field } from '@nestjs/graphql';
import { PostInterface } from '../entities/post.schema';

@InputType()
export class CreateGraphqlInput {
  @Field((type) => String)
  title: string;

  @Field((type) => String)
  description: string;

  @Field((type) => Int)
  price: number;
}

@InputType()
export class PostGraphqlInput implements PostInterface {
  @Field((type) => String)
  title: string;

  @Field((type) => String)
  comment: string;

  @Field((type) => String)
  owner: string;
}

@InputType()
export class FilteringInput {
  @Field({ nullable: true })
  field: string;

  @Field({ nullable: true })
  keyword: string;


  // Add other filtering fields as needed
}


@InputType()
export class SortingInput {
  @Field(() => String, { nullable: true })
  field: string;

  @Field(() => Int, { nullable: true })
  order: number;
}

@InputType()
export class PaginationInput {
  @Field(() => Int)
  skip: number;

  @Field(() => Int)
  take: number;
}