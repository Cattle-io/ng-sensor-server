export interface PacketModel {
  id: number;

  uid: string;

  sensorTemperature: string;
  sensorHumidity: string;

  sensorLatitude: string;
  sensorLongitude: string;

  sensorIMUroll: string;
  sensorIMUpitch: string;
  sensorIMUheading: string;
  sensorIMUaltitude: string;

  sensorCH4: string;

  sensorAirFow: string;
  sensorBattery: string;
  sensorTimestamp: string;

  createdBy: string;
  updatedBy: string;
  createdAt: Date;
  updatedAt: Date;
}
