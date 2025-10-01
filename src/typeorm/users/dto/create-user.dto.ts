<<<<<<< HEAD
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
=======
export class CreateUserDto {
  // TODO: Implement user DTO with validation decorators
}
>>>>>>> 48d895c57156cf1223ad97c487bffeb3c2e80068
