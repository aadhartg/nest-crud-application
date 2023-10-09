import { IsEnum, IsNotEmpty, IsNumber, IsString, MinLength } from 'class-validator';
import { UserInterface } from '../entities/user.entity';

export class CreateUserDtoClass implements UserInterface{
    @IsNotEmpty()
    @IsString()
    readonly name: string;

    @IsNotEmpty()
    @IsString()
    readonly email: string;

    @IsNotEmpty()
    @IsString()
    @MinLength(6)
    readonly pass: string;
}
