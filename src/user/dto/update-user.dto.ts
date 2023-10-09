import { PartialType } from '@nestjs/swagger';
import { CreateUserDtoClass } from './create-user.dto';

export class UpdateUserDto extends PartialType(CreateUserDtoClass) {}
