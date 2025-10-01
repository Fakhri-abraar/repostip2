<<<<<<< HEAD
import { IsInt, IsNotEmpty, IsString } from 'class-validator';

export class CreatePostDto {
  @IsString()
  @IsNotEmpty()
  title: string;

  @IsString()
  @IsNotEmpty()
  content: string;

  @IsInt()
  @IsNotEmpty()
  authorId: number;
}
=======
export class CreatePostDto {
  // TODO: Implement post DTO with validation decorators
}
>>>>>>> 48d895c57156cf1223ad97c487bffeb3c2e80068
