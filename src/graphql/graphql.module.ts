import { Module, forwardRef } from '@nestjs/common';
import { GraphqlService } from './graphql.service';
import { GraphqlResolver } from './graphql.resolver';
import { Post, PostSchema } from './entities/post.schema';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [MongooseModule.forFeature([{ name: 'post', schema: PostSchema }])],
  providers: [GraphqlResolver, GraphqlService],
})
export class GraphqlModule {}
