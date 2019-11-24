import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Connection } from 'typeorm';

import { UsersModule } from './../core/users/users.module';
import { dbSettings } from '../../config/database.config';

const TypeOrmModuleSettings = {
  type: (dbSettings as any).type,
  host: (dbSettings as any).host,
  port: (dbSettings as any).port,
  username: (dbSettings as any).username,
  password: (dbSettings as any).password.replace((dbSettings as any).key, (dbSettings as any).hash),
  database: (dbSettings as any).database,
  entities: [ __dirname + '/../**/*.entity{.ts,.js}' ],
  synchronize: true,
};
@Module({
  imports: [
    TypeOrmModule.forRoot(TypeOrmModuleSettings),
    UsersModule,
  ],
})
export class DatabaseModule {
  constructor(private readonly connection: Connection) {}
}
