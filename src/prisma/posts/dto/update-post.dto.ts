import { PartialType } from '@nestjs/mapped-types';
import { CreatePostDto } from './create-post.dto';

<<<<<<< HEAD
export class UpdatePostDto extends PartialType(CreatePostDto) {}
=======
export class UpdatePostDto extends PartialType(CreatePostDto) {
  // TODO: Implement update DTO extending PartialType(CreatePostDto)
}
>>>>>>> 48d895c57156cf1223ad97c487bffeb3c2e80068
