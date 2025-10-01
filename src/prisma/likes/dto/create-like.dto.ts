<<<<<<< HEAD
import { IsInt, IsNotEmpty } from 'class-validator';

export class CreateLikeDto {
  @IsInt()
  @IsNotEmpty()
  userId: number;

  @IsInt()
  @IsNotEmpty()
  postId: number;
}
=======
export class CreateLikeDto {
  // TODO: Implement like DTO with validation decorators
}
>>>>>>> 48d895c57156cf1223ad97c487bffeb3c2e80068
