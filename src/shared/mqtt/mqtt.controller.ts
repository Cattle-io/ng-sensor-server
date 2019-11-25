import { Controller, Get, Inject, Logger } from '@nestjs/common';
import { ClientProxy, MessagePattern } from '@nestjs/microservices';
import { Observable } from 'rxjs';
import { MQTT_SERVICE } from './mqtt.constant';

@Controller()
export class MQTTController {

  private logger: Logger = new Logger('MQTTGateway');
  constructor(@Inject(MQTT_SERVICE) private readonly client: ClientProxy) {}

  @Get()
  execute(): Observable<number> {
    const pattern = { cmd: 'sum' };
    const data = [1, 2, 3, 4, 5];
    return this.client.send<number>(pattern, data);
  }

  @MessagePattern('cattleio/packets')
  root(): void {
    this.logger.warn('cattleio/packets mqtt message');
  }
}
