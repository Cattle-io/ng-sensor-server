import { Controller, Get, Post, Put, Delete, Param, Body, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { DeviceServices } from './device.service';
import { DeviceModel } from './device.model';
import { debug } from 'console';

@Controller('devices')
export class DeviceController {
  constructor(private deviceService: DeviceServices) {}

  @Get()
  //@UseGuards(AuthGuard())
  getDevices(): any {
    return this.deviceService.findAll();
  }

  @Post()
  addDevice(@Body() deviceModel: DeviceModel): any {
    return this.deviceService.saveDevice(deviceModel);
  }

  @Get(':id')
  getOneDeviceById(@Param() params): any {
    return this.deviceService.findDeviceById(params.id);
  }

  @Put(':id')
  updateDevice(@Body() deviceModel: DeviceModel, @Param() params): any {
    return this.deviceService.updateDevice(params.id, deviceModel);
  }

  @Delete(':id')
  deleteDevice(@Param() params): any {
    return this.deviceService.deleteDevice(params.id);
  }
}
