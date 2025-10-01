<<<<<<< HEAD
// src/prisma/posts/posts.service.ts

=======
>>>>>>> 48d895c57156cf1223ad97c487bffeb3c2e80068
import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma.service';
import { CreatePostDto } from './dto/create-post.dto';
import { UpdatePostDto } from './dto/update-post.dto';

@Injectable()
export class PostsService {
  constructor(private readonly prisma: PrismaService) {}

  async create(createPostDto: CreatePostDto) {
<<<<<<< HEAD
    // Ambil semua properti dari DTO
    const { authorId, content, title } = createPostDto;

    return this.prisma.post.create({
      data: {
        title,     // Sertakan 'title'
        content,
        author: {
          connect: {
            id: authorId,
          },
        },
      },
    });
  }

  async findAll() {
    return this.prisma.post.findMany();
  }

  async findOne(id: number) {
    return this.prisma.post.findUnique({ where: { id } });
  }

  async update(id: number, updatePostDto: UpdatePostDto) {
    // Sederhanakan method update, hapus logika yang memisahkan title
    return this.prisma.post.update({
      where: { id },
      data: updatePostDto,
    });
  }

  async remove(id: number) {
    return this.prisma.post.delete({ where: { id } });
  }
}
=======
    // TODO: Implement post creation with Prisma
  }

  async findAll() {
    // TODO: Implement find all posts with Prisma
  }

  async findOne(id: number) {
    // TODO: Implement find post by id with Prisma
  }

  async update(id: number, updatePostDto: UpdatePostDto) {
    // TODO: Implement post update with Prisma
  }

  async remove(id: number) {
    // TODO: Implement post removal with Prisma
  }
}
>>>>>>> 48d895c57156cf1223ad97c487bffeb3c2e80068
