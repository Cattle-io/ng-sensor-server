import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { PacketEntity } from './packet.entity';

import * as bcrypt from 'bcryptjs';
import { PacketSocketModel } from 'src/shared/sockets/packets-sockets/packets-sockets.model';
import { PacketModel } from 'src/core/packets/packet.model';

@Injectable()
export class PacketServices {
  constructor(
    @InjectRepository(PacketEntity)
    private readonly PacketRP: Repository<PacketEntity>
  ) {}


  public async savePacket(Packet: PacketModel) {
    await this.PacketRP.insert(Packet);
    return Packet;
  }

  public async updatePacket(id: number, Packet: any) {
    await this.PacketRP.update(id, Packet);
  }

  public async findAll() {
    return await this.PacketRP.find();
  }

  public async findPacketById(id: number) {
    return await this.PacketRP.findOne({
      where: {
        id,
      },
    });
  }

  public async findPacketByEmail(email: string) {
    return await this.PacketRP.findOne({
      where: {
        email: email,
      },
    });
  }

  public async deletePacket(id: number) {
    return await this.PacketRP.delete(id);
  }
}
