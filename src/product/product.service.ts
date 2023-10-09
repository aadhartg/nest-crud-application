import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { ProductRepository } from './product.repository';


@Injectable()
export class ProductService {
  constructor(private product: ProductRepository) { }

  /**
   * Purpose: Create New Product
   * @param createProduct 
   * @returns 
   */
  createProduct(createProduct: CreateProductDto) {
    try {
      const product = this.product.create(createProduct);
      return product;
    } catch (error) {
      throw error;
    }
  }

  /**
   * Purpose: return all product
   * @returns 
   */
  findAllProduct() {
    try {
      return this.product.fetchMultipleData();
    } catch (error) {
      throw error;
    }
  }

  /**
   * Purpose: return product by Id
   * @param id 
   * @returns 
   */
  findProductById(id: string) {
    try {
      const data = this.product.fetchSingleData({ id: id });
      return data;
    } catch (error) {
      throw error;
    }
  }

  /**
   * Purpose: update product by Id
   * @param id 
   * @param updateProduct 
   * @returns 
   */
  updateProductById(id: string, updateProduct: CreateProductDto) {
    try {
      const data = this.product.update({ _id: id }, updateProduct);
      return data;
    } catch (error) {
      throw error;
    }
  }

  /**
   * Purpose: remove product by Id
   * @param id 
   * @returns 
   */
  removeProductById(id: string) {
    try {
      const data = this.product.deleteSingleData({ _id: id });
      return data;
    } catch (error) {
      throw error
    }
  }

}
