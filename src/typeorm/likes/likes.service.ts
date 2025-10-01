import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateLikeDto } from './dto/create-like.dto';
import { UpdateLikeDto } from './dto/update-like.dto';
import { Like } from './entities/like.entity';

@Injectable()
export class LikesService {
  constructor(
    @InjectRepository(Like)
    private readonly likeRepository: Repository<Like>,
  ) {}

  async create(createLikeDto: CreateLikeDto): Promise<Like> {
    const newLike = this.likeRepository.create({
      user: { id: createLikeDto.userId },
      post: { id: createLikeDto.postId },
    });
    return this.likeRepository.save(newLike);
  }

  async findAll(): Promise<Like[]> {
    return this.likeRepository.find({ relations: ['user', 'post'] });
  }

  async findOne(id: number): Promise<Like> {
    const like = await this.likeRepository.findOne({ where: { id }, relations: ['user', 'post'] });
    if (!like) {
      throw new NotFoundException(`Like with ID ${id} not found`);
    }
    return like;
  }

  async update(id: number, updateLikeDto: UpdateLikeDto): Promise<Like> {
    const like = await this.findOne(id); // Check if like exists
    const updatedData: any = {};
    if (updateLikeDto.userId) {
      updatedData.user = { id: updateLikeDto.userId };
    }
    if (updateLikeDto.postId) {
      updatedData.post = { id: updateLikeDto.postId };
    }
    
    // Merging the existing like with the updated data to prevent overwriting
    const mergedLike = this.likeRepository.merge(like, updatedData);
    return this.likeRepository.save(mergedLike);
  }

  async remove(id: number): Promise<void> {
    const result = await this.likeRepository.delete(id);
    if (result.affected === 0) {
      throw new NotFoundException(`Like with ID ${id} not found`);
    }
  }
}