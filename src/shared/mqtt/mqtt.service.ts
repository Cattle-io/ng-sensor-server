import { Injectable } from '@nestjs/common';
import { PacketServices } from 'src/core/packets/packet.service';
import { PacketSocketModel } from '../sockets/packets-sockets/packets-sockets.model';
import { PacketsSocketsService } from '../sockets/packets-sockets/packets-sockets.service';
@Injectable()
export class MQTTService {
  private client: any = {};

  constructor(private packetsSocketService: PacketsSocketsService) {
    const mqtt = require('mqtt');
    const mqttClient = mqtt.connect('mqtt://test.mosquitto.org');
    this.client = mqttClient;
  }

  init(): void {
    this.client.on('connect', () => {
      console.log('MQTT BROKER CONNECTED');
      this.client.subscribe('cattleio/packets', err => {});
    });

    this.client.on('message', (topic, message) => {
      const msgTopic = topic.toString();
      const msgPacket = message.toString();

      if (msgTopic === 'cattleio/packets') {
        const socketPacket: PacketSocketModel = JSON.parse(msgPacket);
        this.packetsSocketService
          .savePacketInDatabase(socketPacket)
          .then(response => {
              console.log(' PACKET SAVED INTO DB')
          })
          .catch(error => {
              console.log(' ERROR SAVING PACKET IN DB')
          });
      }
    });
  }
}
