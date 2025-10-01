import { PartialType } from '@nestjs/mapped-types';
import { CreateLikeDto } from './create-like.dto';

<<<<<<< HEAD
export class UpdateLikeDto extends PartialType(CreateLikeDto) {}
=======
export class UpdateLikeDto extends PartialType(CreateLikeDto) {
  // TODO: Implement update DTO extending PartialType(CreateLikeDto)
}
>>>>>>> 48d895c57156cf1223ad97c487bffeb3c2e80068
