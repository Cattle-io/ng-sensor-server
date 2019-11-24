import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UserEntity } from './user.entity';
import { UserModel } from './user.model';

import * as bcrypt from 'bcryptjs';
import { AuthService } from 'src/auth/auth.service';

@Injectable()
export class UserServices {
  constructor(
    @InjectRepository(UserEntity)
    private readonly userRP: Repository<UserEntity>
  ) {}


  public async saveUser(user: any) {
    const userObj: any = user;
    const hashPassword: string = await bcrypt.hash(user.password, 10);
    userObj.password = hashPassword;

    await this.userRP.insert(userObj);
    return user;
  }

  public async updateUser(id: number, user: any) {
    await this.userRP.update(id, user);
  }

  public async findAll() {
    return await this.userRP.find();
  }

  public async findUserById(id: number) {
    return await this.userRP.findOne({
      where: {
        id,
      },
    });
  }

  public async findUserByEmail(email: string) {
    return await this.userRP.findOne({
      where: {
        email: email,
      },
    });
  }

  public async deleteUser(id: number) {
    return await this.userRP.delete(id);
  }
}
