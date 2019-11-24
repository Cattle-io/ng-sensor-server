import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UserServices } from '../core/users/user.service';
import { UserModel } from '../core/users/user.model';

import * as bcrypt from 'bcryptjs';

@Injectable()
export class AuthService {
  constructor(private userService: UserServices, private readonly jwtService: JwtService) {}

  private async validate(credentials: any): Promise<UserModel> {
    return new Promise(async (resolve, reject) => {

      const email: string = credentials.email;
      const user: UserModel = await this.userService.findUserByEmail(email);
      const isPassword: boolean = await bcrypt.compareSync(credentials.password, user.password);

      const isEmailAndPassword: boolean = email === user.email && isPassword;
      if (isEmailAndPassword) {
        resolve(user);
      } else {
        resolve();
      }
    });
  }

  public async login(credentials: any): Promise<any | { status: number }> {
    return this.validate(credentials).then(userData => {
      if (!userData) {
        return { status: 404 };
      }
      const payload = `${userData.name}${userData.id}`;
      const accessToken = this.jwtService.sign(payload);

      return {
        expires_in: 3600,
        access_token: accessToken,
        user_id: payload,
        status: 200,
      };
    });
  }

  public async logout(user: UserModel): Promise<any | { status: number }> {
    return this.validate(user).then(userData => {
      if (!userData) {
        return { status: 404 };
      }
      const payload = `${userData.name}${userData.id}`;
      const accessToken = this.jwtService.sign(payload);

      return {
        expires_in: 3600,
        access_token: accessToken,
        user_id: payload,
        status: 200,
      };
    });
  }

  public async register(user: UserModel): Promise<any> {
    return this.userService.saveUser(user);
  }


  public validateUser(payload) {
    console.log('PERRAS!!')
    return { username: 'rosa' };
  }
}
