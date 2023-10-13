import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { GraphqlService } from './graphql.service';
import { Product } from './entities/graphql.entity';
import { CreateGraphqlInput, PostGraphqlInput } from './dto/create-graphql.input';
import { UpdateGraphqlInput } from './dto/update-graphql.input';
import { Product as productModel } from '../graphql';
import { FilteringInput, SortingInput, PaginationInput } from './dto/create-graphql.input';
import { PostGraphqlInput as postModel } from '../graphql';
import { PostGraphqlOutput } from './entities/post.schema';

@Resolver(of => Product)
export class GraphqlResolver {
  constructor(private readonly graphqlService: GraphqlService) {}
  // Queries and Mutation 

  /**
   * Purpose: Create Product
   * @param createGraphqlInput 
   * @returns 
   */
  @Mutation(returns => String,{name: "createProduct"})
  createGraphql(@Args('createGraphqlInput') createGraphqlInput: CreateGraphqlInput): string {
    return this.graphqlService.create(createGraphqlInput);
  }

  /**
   * Purpose: get all product
   * @returns 
   */
  @Query(returns => [Product], {name:"productAll"})
  findAll(): productModel[] {
    return this.graphqlService.findAll();
  }

  /**
   * Purpose:find product by ID
   * @param id 
   * @returns 
   */
  @Query(returns => [Product], { name: 'findProductById', nullable: true })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.graphqlService.findOne(id);
  }

  /**
   * Purpose: Update product by ID
   * @param id 
   * @param createGraphqlInput 
   * @returns 
   */
  @Mutation(returns => String, { name: 'updateProductById', nullable: true })
  updateGraphql(@Args({name:'updateId',type: () => Int }) id: number,
  @Args('createGraphqlInput') createGraphqlInput: CreateGraphqlInput): string {
    return this.graphqlService.update(id,createGraphqlInput);
  }

  /**
   * Purpose: Delete product by ID
   * @param id 
   * @returns 
   */
  @Mutation(returns => String, { name: 'deleteProductById', nullable: true })
  removeGraphql(@Args({name:'deleteId',type: () => Int }) id: number): string {
    return this.graphqlService.remove(id);
  }

  /**
   * Purpose: Implement filter, sort, and searching using GraphQL 
   * @param filter 
   * @param sorting 
   * @param pagination 
   * @returns 
   */
  @Query(returns => [Product], {name:"productFilterQuery", nullable: true })
  findQuery(@Args('filter')filter:FilteringInput,
  @Args('sorting')sorting:SortingInput,
  @Args('pagination')pagination: PaginationInput) {
    return this.graphqlService.findQuery(filter,sorting,pagination);
  }

  /**
   * Purpose: Create post
   * @param creatPost 
   * @returns 
   */
  @Mutation(returns => String,{name: "createPost", nullable : true})
  creatPost(@Args('creatPost') creatPost: PostGraphqlInput): Promise<string> {
    return this.graphqlService.creatPost(creatPost);
  }

  /**
   * Purpose: Apply filter, sorting and pagination by post.
   * @param filter 
   * @param sorting 
   * @param pagination 
   * @returns 
   */
  @Mutation(returns => [PostGraphqlOutput], {name:"filterpost"})
  filterPost(@Args('filter')filter:FilteringInput,
  @Args('sorting')sorting:SortingInput,
  @Args('pagination')pagination: PaginationInput): Promise<any> {
    return this.graphqlService.filterPost(filter,sorting,pagination);    
  }

  /**
   * Purpose: get All Post
   * @returns 
   */
  @Query(returns => [PostGraphqlOutput], {name:"postAll"})
  findAllPost(): Promise<any> {
    return this.graphqlService.findAllPost();
  }
}
