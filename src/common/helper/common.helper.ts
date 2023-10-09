import { Injectable } from '@nestjs/common';
import { JwtService } from "@nestjs/jwt";
import environment from '../../environment.json';

@Injectable()
export class CommonHelper{
    constructor(private jwtService: JwtService){}

    /**
     * Purpose: Generate JWT Token
     * @param id 
     * @returns 
     */
    createJwtToken(id:Object){
        const token = this.jwtService.sign(id, { secret: `${environment.env.JWT_SECRET}`});  // generate JWT Token
        return token;
    }
}