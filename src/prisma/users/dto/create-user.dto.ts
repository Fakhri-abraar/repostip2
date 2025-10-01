<<<<<<< HEAD
// src/prisma/users/dto/create-user.dto.ts

import { IsEmail, IsNotEmpty, IsString } from 'class-validator';

export class CreateUserDto {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsEmail()
  @IsNotEmpty()
  email: string;
}
=======
export class CreateUserDto {
  // TODO: Implement user DTO with validation decorators
}
>>>>>>> 48d895c57156cf1223ad97c487bffeb3c2e80068
