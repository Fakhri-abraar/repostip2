import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Injectable()
export class UsersService {
  constructor(private readonly prisma: PrismaService) {}

  async create(createUserDto: CreateUserDto) {
<<<<<<< HEAD
    // Ambil bagian email sebelum '@' untuk dijadikan username
    const username = createUserDto.email.split('@')[0];

    return this.prisma.user.create({
      data: {
        ...createUserDto,
        username,
      },
    });
  }

  async findAll() {
    return this.prisma.user.findMany();
  }

  async findOne(id: number) {
    return this.prisma.user.findUnique({ where: { id } });
  }

  async update(id: number, updateUserDto: UpdateUserDto) {
    return this.prisma.user.update({
      where: { id },
      data: updateUserDto,
    });
  }

  async remove(id: number) {
    return this.prisma.user.delete({ where: { id } });
  }
}
=======
    // TODO: Implement user creation with Prisma
  }

  async findAll() {
    // TODO: Implement find all users with Prisma
  }

  async findOne(id: number) {
    // TODO: Implement find user by id with Prisma
  }

  async update(id: number, updateUserDto: UpdateUserDto) {
    // TODO: Implement user update with Prisma
  }

  async remove(id: number) {
    // TODO: Implement user removal with Prisma
  }
}
>>>>>>> 48d895c57156cf1223ad97c487bffeb3c2e80068
