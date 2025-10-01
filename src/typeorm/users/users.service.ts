<<<<<<< HEAD
import { Injectable, NotFoundException } from '@nestjs/common';
=======
import { Injectable } from '@nestjs/common';
>>>>>>> 48d895c57156cf1223ad97c487bffeb3c2e80068
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
  ) {}

  async create(createUserDto: CreateUserDto): Promise<User> {
<<<<<<< HEAD
    const newUser = this.userRepository.create(createUserDto);
    return this.userRepository.save(newUser);
  }

  async findAll(): Promise<User[]> {
    return this.userRepository.find({ relations: ['posts', 'likes'] });
  }

  async findOne(id: number): Promise<User> {
    const user = await this.userRepository.findOne({ where: { id }, relations: ['posts', 'likes'] });
    if (!user) {
      throw new NotFoundException(`User with ID ${id} not found`);
    }
    return user;
  }

  async update(id: number, updateUserDto: UpdateUserDto): Promise<User> {
    const user = await this.findOne(id); // Check if user exists first
    await this.userRepository.update(id, updateUserDto);
    return this.findOne(id);
  }

  async remove(id: number): Promise<void> {
    const result = await this.userRepository.delete(id);
    if (result.affected === 0) {
      throw new NotFoundException(`User with ID ${id} not found`);
    }
  }
}
=======
    // TODO: Implement user creation
  }

  async findAll(): Promise<User[]> {
    // TODO: Implement find all users
  }

  async findOne(id: number): Promise<User> {
    // TODO: Implement find user by id
  }

  async update(id: number, updateUserDto: UpdateUserDto): Promise<User> {
    // TODO: Implement user update
  }

  async remove(id: number): Promise<void> {
    // TODO: Implement user removal
  }
}
>>>>>>> 48d895c57156cf1223ad97c487bffeb3c2e80068
