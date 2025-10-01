import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma.service';
import { CreatePostDto } from './dto/create-post.dto';
import { UpdatePostDto } from './dto/update-post.dto';

@Injectable()
export class PostsService {
  constructor(private readonly prisma: PrismaService) {}

  async create(createPostDto: CreatePostDto) {
    // Destrukturisasi authorId dari DTO
    const { authorId, ...postData } = createPostDto;
    return this.prisma.post.create({
      data: {
        ...postData,
        author: {
          connect: { id: authorId }, // Cara yang benar untuk membuat relasi
        },
      },
    });
  }

  async findAll() {
    return this.prisma.post.findMany();
  }

  async findOne(id: number) {
    const post = await this.prisma.post.findUnique({
      where: { id },
    });
    if (!post) {
      throw new NotFoundException(`Post with ID ${id} not found`);
    }
    return post;
  }

  async update(id: number, updatePostDto: UpdatePostDto) {
    await this.findOne(id); // Memastikan post ada
    const { authorId, ...postData } = updatePostDto;
    return this.prisma.post.update({
      where: { id },
      data: {
        ...postData,
        // Jika authorId disertakan dalam update, kita juga bisa mengubah author post
        ...(authorId && {
          author: {
            connect: { id: authorId },
          },
        }),
      },
    });
  }

  async remove(id: number) {
    await this.findOne(id); // Memastikan post ada
    return this.prisma.post.delete({
      where: { id },
    });
  }
}