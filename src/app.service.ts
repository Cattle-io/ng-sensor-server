import { Injectable } from '@nestjs/common';
import { MQTTService } from './shared/mqtt/mqtt.service';
@Injectable()
export class AppService {

  constructor(private mqttService: MQTTService){
    this.mqttService.init();
  }
 
  getHello(): string {
    return 'Hello World!';
  }
}
