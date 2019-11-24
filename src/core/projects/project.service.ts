import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ProjectEntity } from './Project.entity';

import * as bcrypt from 'bcryptjs';

@Injectable()
export class ProjectServices {
  constructor(
    @InjectRepository(ProjectEntity)
    private readonly ProjectRP: Repository<ProjectEntity>
  ) {}


  public async saveProject(Project: any) {
    const ProjectObj: any = Project;
    await this.ProjectRP.insert(ProjectObj);
    return Project;
  }

  public async updateProject(id: number, Project: any) {
    await this.ProjectRP.update(id, Project);
  }

  public async findAll() {
    return await this.ProjectRP.find();
  }

  public async findProjectById(id: number) {
    return await this.ProjectRP.findOne({
      where: {
        id,
      },
    });
  }

  public async findProjectByEmail(email: string) {
    return await this.ProjectRP.findOne({
      where: {
        email: email,
      },
    });
  }

  public async deleteProject(id: number) {
    return await this.ProjectRP.delete(id);
  }
}
