import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { User, UserSchema } from './entities/user.entity';
import { AuthModule } from 'src/auth/auth.module';
import { UserRepository } from './user.repository';
import { CommonHelper } from 'src/common/helper/common.helper';
import { JwtService } from '@nestjs/jwt';

@Module({
  imports: [MongooseModule.forFeature([{ name: 'user', schema: UserSchema },
  ]), AuthModule],
  controllers: [UserController],
  providers: [UserService,UserRepository,CommonHelper,JwtService]
})
export class UserModule {}
