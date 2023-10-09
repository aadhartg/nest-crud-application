import { IsEnum, IsNotEmpty, IsNumber, IsString, MinLength } from 'class-validator';
import { LoginInterface } from '../entities/user.entity';

export class LoginUserDtoClass implements LoginInterface {
    @IsNotEmpty()
    @IsString()
    readonly email: string;

    @IsNotEmpty()
    @IsString()
    @MinLength(6)
    readonly pass: string;
}