import { Module } from "@nestjs/common";;
import { PassportModule } from "@nestjs/passport";
import { JwtModule, JwtService } from '@nestjs/jwt';
import { ConfigModule, ConfigService } from "@nestjs/config";
import environment from '../environment.json';


@Module({
  imports: [ConfigModule,
    PassportModule.register({ defaultStrategy: 'jwt' }),  
    JwtModule.registerAsync({
    imports: [ConfigModule],
    inject: [ConfigService],
    useFactory: async (config: ConfigService) => {
      return {
        secret: environment.env.JWT_SECRET,
        signOptions: {
          expiresIn: environment.env.JWT_EXPIRE,
        }
      }
    }
  })],
  providers: [JwtService],
  controllers: [],
})
export class AuthModule { }