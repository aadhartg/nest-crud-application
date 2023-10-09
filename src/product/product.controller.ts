import { Controller, Get, Post, Body, Patch, Param, Delete, UploadedFile } from '@nestjs/common';
import { UseInterceptors } from '@nestjs/common/decorators/core/use-interceptors.decorator';
import { ProductService } from './product.service';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { Express } from 'express';
//import { UploadedFileDto } from './dto/create-product.dto';
import { FileInterceptor } from '@nestjs/platform-express';
import { throwError } from 'rxjs';

@Controller('product')
export class ProductController {
  constructor(private readonly productService: ProductService) {}

  /**
   * Purpose: Creates Post request for product creation.
   * @param createProduct 
   * @returns 
   */
  @Post()
  createProduct(
    @Body() createProduct:CreateProductDto) {
      try{
        const createdProduct = this.productService.createProduct(
          createProduct
        );
        return createdProduct;
      } catch(error){
        throw error;
      }
  }

  /**
   * Purpose: get all product
   * @returns 
   */
  @Get()
  findAllProduct() {
    try{
      return this.productService.findAllProduct();
    } catch(error){
      throw error;
    }
    
  }

  /**
   * Purpose: Get product by ID
   * @param productId 
   * @returns 
   */
  @Get(':id')    
  findProductById(@Param('id') productId: string) {
    try{
      return this.productService.findProductById(productId);
    } catch(error){
      throw error;
    }
    
  }

  /**
   * Purpose: Update product by ID
   * @param id 
   * @param updateProduct 
   * @returns 
   */
  @Patch(':id')
  updateProductById(@Param('id') id:string, @Body() updateProduct: CreateProductDto) {
    try{
      const updatedProduct = this.productService.updateProductById(id,updateProduct);
      return updatedProduct;
    } catch(error){
      throw error;
    }
  }

  /**
   * Purpose: delete product by ID
   * @param id 
   * @returns 
   */
  @Delete(':id')
  removeProductById(@Param('id') id: string) {
    try{
      return this.productService.removeProductById(id);
    } catch(error){
      throw error;
    }
  }
}
