import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersRepository } from 'src/features/users/repositories';
import { UsersController } from 'src/features/users/users.controller';
import { UsersService } from 'src/features/users/users.service';

@Module({
  imports: [TypeOrmModule.forFeature([UsersRepository])],
  controllers: [UsersController],
  providers: [UsersService],
  exports: [UsersService, TypeOrmModule],
})
export class UsersModule {}
