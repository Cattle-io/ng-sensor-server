import { Module } from '@nestjs/common';
import { ClientsModule } from '@nestjs/microservices';
import { Transport } from '@nestjs/microservices';

import { MQTT_SERVICE } from './mqtt.constant';
import { MQTTController } from './mqtt.controller';

@Module({
  imports: [ClientsModule.register([{ name: MQTTController, transport: Transport.MQTT } as any])],
  controllers: [],
  providers: [],
  exports: []
})
export class MQTTModule {}
