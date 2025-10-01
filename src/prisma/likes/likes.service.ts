import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma.service';
import { CreateLikeDto } from './dto/create-like.dto';
import { UpdateLikeDto } from './dto/update-like.dto';

@Injectable()
export class LikesService {
  constructor(private readonly prisma: PrismaService) {}

  async create(createLikeDto: CreateLikeDto) {
    const { userId, postId } = createLikeDto;
    return this.prisma.like.create({
      data: {
        user: {
          connect: { id: userId },
        },
        post: {
          connect: { id: postId },
        },
      },
    });
  }

  async findAll() {
    return this.prisma.like.findMany();
  }

  async findOne(id: number) {
    return this.prisma.like.findUnique({ where: { id } });
  }

  async update(id: number, updateLikeDto: UpdateLikeDto) {
    // Note: Update logic might need more specific implementation
    // depending on what can be updated (e.g., changing the user who liked?).
    // For now, a basic implementation is provided.
    const { userId, postId } = updateLikeDto;
    return this.prisma.like.update({
      where: { id },
      data: {
        userId,
        postId,
      },
    });
  }

  async remove(id: number) {
    return this.prisma.like.delete({ where: { id } });
  }
}