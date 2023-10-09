import { Injectable, UnauthorizedException } from '@nestjs/common';
import * as bcrypt from 'bcryptjs';
import { CreateUserDtoClass } from './dto/create-user.dto';
import { LoginUserDtoClass } from './dto/login-user.dto';
import { CommonHelper } from 'src/common/helper/common.helper';
import { UserRepository } from './user.repository';

@Injectable()
export class UserService {
  constructor(private user: UserRepository,
    private commonHelper: CommonHelper
  ) { }

  /**
   * Purpose: SignUp User
   * @param signUpDto
   * @returns 
   */
  async signUp(signUpDto: CreateUserDtoClass): Promise<{ users: Object, status: number }> {
    try {
      const { name, email, pass } = signUpDto;
      const hashedPassword = await bcrypt.hash(pass, 10)
      console.log(hashedPassword);
      const users = await this.user.create({
        name,
        email,
        pass: hashedPassword
      })
      const token = this.commonHelper.createJwtToken({ id: users._id });  // generate JWT Token
      return { users, status:201};
    } catch (error) {
      throw error;
    }
  }

  /**
   * Purpose: login User
   * @param loginDto 
   * @returns 
   */
  async login(loginDto: LoginUserDtoClass) {
    try {
      const { email, pass } = loginDto;
      const user = await this.user.fetchSingleData({ "email": email });
      if (!user) {
        throw new UnauthorizedException('Invalid email or password');
      }
      const isPasswordMathced = await bcrypt.compare(pass, user.pass);   // compare bcrypt Password
      if (!isPasswordMathced) {
        throw new UnauthorizedException('Invalid email or password');
      }
      const token = this.commonHelper.createJwtToken({ id: user._id });
      return { token,user, status: 201 };
    } catch (error) {
      throw error;
    }
  }


  /**
   * Purpose: get user details
   * @param req 
   * @returns 
   */
  async getProfile(req: any) {
    try {
      return "Authentication validate";
    } catch (error) {
      return error;
    }
  }
}
