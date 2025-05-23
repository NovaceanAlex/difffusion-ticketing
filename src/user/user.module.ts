import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './user.entity';
import { UserService } from './user.service';
import { UserRepository } from './user.repository';

@Module({
  imports: [TypeOrmModule.forFeature([User])], // needed for DI to work
  providers: [UserService, UserRepository],
  exports: [UserService],
})
export class UserModule {}
