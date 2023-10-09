import { Injectable, Module } from "@nestjs/common";
import { MongooseModule, MongooseModuleOptions, MongooseOptionsFactory } from "@nestjs/mongoose";
import environment from '../../environment.json';


@Injectable()
export class MongoDBService implements MongooseOptionsFactory {

    constructor() { }
    
    createMongooseOptions(): MongooseModuleOptions {
  
      return {
        uri: environment.env.MONGO_URI,
        maxPoolSize: 5
      };
    }
  }

@Module({
    imports: [MongooseModule.forRootAsync({
      useClass: MongoDBService,
    }),],
    providers:[MongoDBService]
  })

export class DatabaseModule {

}