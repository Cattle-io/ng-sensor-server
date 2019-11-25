import { Module } from '@nestjs/common';
import { ClientsModule } from '@nestjs/microservices';
import { MQTTService } from './mqtt.service';
import { PacketsSocketsModule } from 'src/shared/sockets/packets-sockets/packets-sockets.module';


@Module({
  imports: [PacketsSocketsModule ],
  controllers: [],
  providers: [MQTTService],
  exports: [MQTTService]
})
export class MQTTModule {}
