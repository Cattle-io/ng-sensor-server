import { Module } from '@nestjs/common';

import { DatabaseModule } from './database/database.module';
import { SocketsModule } from './shared/sockets/sockets.module';

import { UsersModule } from './core/users/users.module';
import { DevicesModule } from './core/devices/devices.module';
import { ProjectsModule } from './core/projects/projects.module';

import { AuthModule } from './auth/auth.module';

import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [DatabaseModule, SocketsModule, UsersModule, DevicesModule, ProjectsModule, AuthModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
