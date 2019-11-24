import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { DeviceEntity } from './device.entity';

import * as bcrypt from 'bcryptjs';

@Injectable()
export class DeviceServices {
  constructor(
    @InjectRepository(DeviceEntity)
    private readonly DeviceRP: Repository<DeviceEntity>
  ) {}


  public async saveDevice(device: any) {
    const DeviceObj: any = device;
    await this.DeviceRP.insert(DeviceObj);
    return device;
  }

  public async updateDevice(id: number, device: any) {
    await this.DeviceRP.update(id, device);
  }

  public async findAll() {
    return await this.DeviceRP.find();
  }

  public async findDeviceById(id: number) {
    return await this.DeviceRP.findOne({
      where: {
        id,
      },
    });
  }

  public async findDeviceByEmail(email: string) {
    return await this.DeviceRP.findOne({
      where: {
        email: email,
      },
    });
  }

  public async deleteDevice(id: number) {
    return await this.DeviceRP.delete(id);
  }
}
