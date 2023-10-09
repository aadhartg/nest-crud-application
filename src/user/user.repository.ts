import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User,UserDocument } from './entities/user.entity';


@Injectable()
export class UserRepository {
    constructor(@InjectModel('user')
    public user: Model<UserDocument>) { }

    /**
      * Purpose: For saving data.
      * @param data
      * @returns
      */
    async create(data: object) {
        const response = await this.user
            .create(data)
            .catch((error) => {
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
        const response = await this.user
            .findOne(whereCondition)
            .catch((error) => {
                throw error;
            });
        return response;
    }
}
