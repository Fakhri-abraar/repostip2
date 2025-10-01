import { Injectable, NotFoundException } from '@nestjs/common';
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
        user: { connect: { id: userId } },
        post: { connect: { id: postId } },
      },
    });
  }

  async findAll() {
    return this.prisma.like.findMany();
  }

  async findOne(id: number) {
    const like = await this.prisma.like.findUnique({
      where: { id },
    });
    if (!like) {
      throw new NotFoundException(`Like with ID ${id} not found`);
    }
    return like;
  }

  async update(id: number, updateLikeDto: UpdateLikeDto) {
    await this.findOne(id); // Memastikan like ada
    const { userId, postId } = updateLikeDto;
    return this.prisma.like.update({
      where: { id },
      data: {
        ...(userId && { user: { connect: { id: userId } } }),
        ...(postId && { post: { connect: { id: postId } } }),
      },
    });
  }

  async remove(id: number) {
    await this.findOne(id); // Memastikan like ada
    return this.prisma.like.delete({
      where: { id },
    });
  }
}