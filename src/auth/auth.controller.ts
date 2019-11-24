import { Controller, Get, Post, Put, Delete, Param, Body } from '@nestjs/common';
import { UserServices } from './../core/users/user.service';
import { UserModel } from './../core/users/user.model';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  constructor(private userServices: UserServices, private authService: AuthService) {}

  @Post('login')
  async login(@Body() credentials: any): Promise<any> {
    return await this.authService.login(credentials);
  }

  @Post('logout')
  async logout(@Body() user: UserModel): Promise<any> {
    return this.authService.login(user);
  }

  @Post('register')
  async register(@Body() user: UserModel): Promise<any> {
    return this.authService.register(user);
  }

  @Post('unregister')
  async unregister(@Body() user: UserModel): Promise<any> {
    return this.authService.register(user);
  }
}
