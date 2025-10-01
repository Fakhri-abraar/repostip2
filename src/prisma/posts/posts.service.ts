import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma.service';
import { CreatePostDto } from './dto/create-post.dto';
import { UpdatePostDto } from './dto/update-post.dto';

@Injectable()
export class PostsService {
  constructor(private readonly prisma: PrismaService) {}

  async create(createPostDto: CreatePostDto) {
    // Ambil hanya properti yang ada di database: content dan authorId
    // Properti 'title' dari DTO akan diabaikan
    const { authorId, content } = createPostDto;

    return this.prisma.post.create({
      data: {
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
    // Pastikan hanya field 'content' yang bisa di-update, karena 'title' tidak ada
    const { title, ...validUpdateData } = updatePostDto;

    return this.prisma.post.update({
      where: { id },
      data: validUpdateData,
    });
  }

  async remove(id: number) {
    return this.prisma.post.delete({ where: { id } });
  }
}