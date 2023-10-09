import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards, Request } from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDtoClass } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { LoginUserDtoClass } from './dto/login-user.dto';
import { GuardGuard } from '../guard/guard.guard';
import { AuthGuard } from '@nestjs/passport';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) { }

  /**
   * Purpose: Create User
   * @param createAuthDto 
   * @returns 
   */
  @Post('/signup')
  signUp(@Body() createAuthDto: CreateUserDtoClass): Promise<{ users: Object }> {
    try {
      return this.userService.signUp(createAuthDto);
    } catch (error) {
      throw error;
    }
  }

  /**
   * Purpose: login user
   * @param LoginAuthDto 
   * @returns 
   */
  // @UseGuards(AuthGuard('local'))
  @Post('/login')
  login(@Body() LoginAuthDto: LoginUserDtoClass) {
    try {
      return this.userService.login(LoginAuthDto);
    } catch (error) {
      throw error;
    }
  }

  /**
   * Purpose: Get profile details once login
   * @param req 
   * @returns 
   */
  @UseGuards(GuardGuard)
  @Get('/getProfile')
  getProfile(@Request() req: any) {
    try {
      return this.userService.getProfile(req);
    } catch (error) {
      throw error;
    }
  }
}
