import { Controller, Get, Post, Put, Delete, Param, Body, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { ProjectServices } from './project.service';
import { ProjectModel } from './project.model';
import { debug } from 'console';

@Controller('Projects')
export class ProjectController {
  constructor(private ProjectService: ProjectServices) {}

  @Get()
  //@UseGuards(AuthGuard())
  getProjects(): any {
    return this.ProjectService.findAll();
  }

  @Post()
  addProject(@Body() ProjectModel: ProjectModel): any {
    return this.ProjectService.saveProject(ProjectModel);
  }

  @Get(':id')
  getOneProjectById(@Param() params): any {
    return this.ProjectService.findProjectById(params.id);
  }

  @Put(':id')
  updateProject(@Body() ProjectModel: ProjectModel, @Param() params): any {
    return this.ProjectService.updateProject(params.id, ProjectModel);
  }

  @Delete(':id')
  deleteProject(@Param() params): any {
    return this.ProjectService.deleteProject(params.id);
  }
}
