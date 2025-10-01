import { IsEmail, IsNotEmpty, IsString, IsInt, IsOptional } from 'class-validator';

export class CreateUserDto {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsEmail()
  @IsNotEmpty()
  email: string;

  @IsInt()
  @IsOptional()
  age?: number = 0;
}
