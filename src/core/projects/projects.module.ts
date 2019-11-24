import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { ProjectServices } from './Project.service';
import { ProjectEntity } from './Project.entity';
import { ProjectController } from './Project.controller';

@Module({
  imports: [
    PassportModule.register({ defaultStrategy: 'jwt' }),
    TypeOrmModule.forFeature([ProjectEntity]),
  ],
  controllers: [ProjectController],
  providers: [ProjectServices],
  exports: [ProjectServices],
})
export class ProjectsModule {}
