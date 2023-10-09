import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";

export type UserDocument = User & Document;

@Schema({
    timestamps: true,
})
export class User implements UserInterface {
    @Prop({
        type: String,
        required: true,
    })
    name: string;

    @Prop({
        unique: [true, 'Duplicate email entered']
    })
    email: string;

    @Prop({
        minlength: 6,
        required: true
    })
    pass: string;
}

export const UserSchema = SchemaFactory.createForClass(User);

export interface UserInterface {
    name: string;
    email: string;
    pass: string;
}
export interface LoginInterface {
    email: string;
    pass: string;
}
