import { Injectable } from '@nestjs/common';
import { PacketSocketModel } from './packets-sockets.model';
import { PacketServices } from 'src/core/packets/packet.service';
import { PacketModel } from 'src/core/packets/packet.model';

@Injectable()
export class PacketsSocketsService {
  constructor(private packetService: PacketServices) {}

  public savePacketInDatabase(packet: PacketSocketModel): Promise<PacketSocketModel> {
    return new Promise((resolve, reject) => {
      const sensorPacket: PacketModel = {
        id: 0,
        uid: packet.uid,
        sensorTemperature: packet.temperature,
        sensorHumidity: packet.humidity,
        sensorLatitude: packet.gps.latitude,
        sensorLongitude: packet.gps.longitude,
        sensorIMUroll: packet.imu.roll,
        sensorIMUpitch: packet.imu.pitch,
        sensorIMUheading: packet.imu.heading,
        sensorIMUaltitude: packet.imu.altitude,
        sensorCH4: packet.ch4,
        sensorAirFlow: packet.airFlow,
        sensorBattery: packet.batteryLevel,
        sensorTimestamp: packet.timestamp,
        createdBy: 'Jorge Luis Mayorga',
        updatedBy: 'Jorge Luis Mayorga',
        createdAt: new Date(),
        updatedAt: new Date(),
      };

      delete sensorPacket.id;

      this.packetService
        .savePacket(sensorPacket)
        .then(response => resolve(packet))
        .catch(error => reject(error));
    });
  }
}
