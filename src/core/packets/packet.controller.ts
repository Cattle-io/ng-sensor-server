import { Controller, Get, Post, Put, Delete, Param, Body, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { PacketServices } from './packet.service';
import { PacketModel } from './packet.model';
import { debug } from 'console';

@Controller('Packets')
export class PacketController {
  constructor(private PacketService: PacketServices) {}

  @Get()
  //@UseGuards(AuthGuard())
  getPackets(): any {
    return this.PacketService.findAll();
  }

  @Post()
  addPacket(@Body() PacketModel: PacketModel): any {
    return this.PacketService.savePacket(PacketModel);
  }

  @Get(':id')
  getOnePacketById(@Param() params): any {
    return this.PacketService.findPacketById(params.id);
  }

  @Put(':id')
  updatePacket(@Body() PacketModel: PacketModel, @Param() params): any {
    return this.PacketService.updatePacket(params.id, PacketModel);
  }

  @Delete(':id')
  deletePacket(@Param() params): any {
    return this.PacketService.deletePacket(params.id);
  }
}
