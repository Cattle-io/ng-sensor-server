import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { DeviceServices } from './device.service';
import { DeviceEntity } from './device.entity';
import { DeviceController } from './device.controller';

@Module({
  imports: [
    PassportModule.register({ defaultStrategy: 'jwt' }),
    TypeOrmModule.forFeature([DeviceEntity]),
  ],
  controllers: [DeviceController],
  providers: [DeviceServices],
  exports: [DeviceServices],
})
export class DevicesModule {}
