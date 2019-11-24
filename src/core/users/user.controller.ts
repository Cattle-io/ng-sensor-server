import { Controller, Get, Post, Put, Delete, Param, Body, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { UserServices } from './user.service';
import { UserModel } from './user.model';
import { debug } from 'console';

@Controller('users')
export class UserController {
  constructor(private userServices: UserServices) {}

  @Get()
  //@UseGuards(AuthGuard())
  getUsers(): any {
    return this.userServices.findAll();
  }

  @Post()
  addUser(@Body() userModel: UserModel): any {
    return this.userServices.saveUser(userModel);
  }

  @Get(':id')
  getOneUserById(@Param() params): any {
    return this.userServices.findUserById(params.id);
  }

  @Get('byEmail/:email')
  getOneUserByEmail(@Param() params): any {
    return this.userServices.findUserByEmail(params.email);
  }

  @Put(':id')
  updateUser(@Body() userModel: UserModel, @Param() params): any {
    return this.userServices.updateUser(params.id, userModel);
  }

  @Delete(':id')
  deleteUser(@Param() params): any {
    return this.userServices.deleteUser(params.id);
  }


}
