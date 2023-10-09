import { Module } from '@nestjs/common';
import { ProductService } from './product.service';
import { ProductController } from './product.controller';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';
import { MongooseModule } from '@nestjs/mongoose';
import { Product } from './entities/product.entity';
import { ProductSchema } from './entities/product.entity';
import { ProductRepository } from './product.repository';
import { AuthModule } from 'src/auth/auth.module';

@Module({
  imports: [AuthModule,
    MongooseModule.forFeature([{ name: 'product', schema: ProductSchema } ])],
  controllers: [ProductController],
  providers: [ProductService, ProductRepository]
})
export class ProductModule { }
