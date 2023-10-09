import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Product, ProductDocument } from "./entities/product.entity";
import { Model } from 'mongoose';


@Injectable()
export class ProductRepository {
    constructor(@InjectModel('product') private product: Model<ProductDocument>) { }

    /**
      * Purpose: For saving data.
      * @param data
      * @returns
      */
    async create(data: object) {
        const response = await this.product.create(data).catch((error) => {
            throw error;
        });
        return response;
    }

    /**
     * Purpose: For fetching single record by condition.
     * @param whereCondition
     * @returns
     */
    async fetchSingleData(whereCondition: object) {
        const response = await this.product
            .findOne(whereCondition)
            .catch((error) => {
                throw error;
            });
        return response;
    }

    /**
     * Purpose: For fetching multiple records by condition.
     * @param whereCondition
     * @returns
     */
    async fetchMultipleData() {
        const response = await this.product
            .find()
            .catch((error) => {
                throw error;
            });
        return response;
    }

    /**
     * Purpose: For fetching updating single entry by condition.
     * @param whereCondition
     * @param data
     * @returns
     */
    async update(whereCondition: object, data: object) {
        const response = await this.product
            .updateOne(whereCondition, data)
            .catch((error) => {
                throw error;
            });
        return response;
    }

    /**
     * Purpose: For updating multiple entries by condition.
     * @param whereCondition
     * @param data
     * @returns
     */
    async updateMany(whereCondition: object, data: object[]) {
        const response = await this.product
            .updateMany(whereCondition, data)
            .catch((error) => {
                throw error;
            });
        return response;
    }

    /**
     * Purpose: For fetching deleting single entry by condition.
     * @param whereCondition 
     * @returns 
     */
    async deleteSingleData(whereCondition: object){
        const response = await this.product
        .deleteMany(whereCondition)
        .catch((error) => {
            throw error
        });
        return response;
    }
}
