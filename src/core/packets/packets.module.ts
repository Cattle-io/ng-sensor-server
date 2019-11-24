import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { PacketServices } from './packet.service';
import { PacketEntity } from './Packet.entity';
import { PacketController } from './packet.controller';

@Module({
  imports: [
    PassportModule.register({ defaultStrategy: 'jwt' }),
    TypeOrmModule.forFeature([PacketEntity]),
  ],
  controllers: [PacketController],
  providers: [PacketServices],
  exports: [PacketServices],
})
export class PacketsModule {}
