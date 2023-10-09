// import { InjectModel } from "@nestjs/mongoose"
// import { Model } from "mongoose"
// import { Product, ProductDocument } from "../product/entities/product.entity"

// export class ProductRepository {
//     constructor(@InjectModel('product') private productModel: Model<ProductDocument>){}

//     /**
//      * Purpose: Create New Product
//      * @param dataModel 
//      * @returns 
//      */
//     create(dataModel:any){
//         return this.productModel.create(dataModel);
//     }
//     /**
//      * Purpose: find detail by ID
//      * @param id 
//      * @returns 
//      */
//     findById(id:string){
//         return this.productModel.findById(id);
//     }

//     /**
//      * Purpose: find all record
//      * @returns 
//      */
//     findAll(){
//         return this.productModel.find();
//     }

//     /**
//      * Purpose: update particular record by ID
//      * @param id 
//      * @param object 
//      * @returns 
//      */
//     updateById(id:string,object:Object){
//         return this.productModel.findByIdAndUpdate({_id:id},object);
//     }

//     /**
//      * Purpose: remove particular record by ID
//      * @param id 
//      * @returns 
//      */
//     removeById(id:string){
//         return this.productModel.findOneAndDelete({_id:id});
//     }
// }