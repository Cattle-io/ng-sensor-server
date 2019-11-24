import { Entity, Column, BeforeInsert, PrimaryGeneratedColumn } from 'typeorm';

@Entity('packets')
export class PacketEntity {

  @PrimaryGeneratedColumn()
  id: number;

  @Column({ unique: true })
  uid: string;

  @Column({ name: 'sensor_temperature' })
  sensorTemperature: string;
  
  @Column({ name: 'sensor_humidity' })
  sensorHumidity: string;

  @Column({ name: 'sensor_gps_latitude' })
  sensorLatitude: string;
  @Column({ name: 'sensor_gps_longitude' })
  sensorLongitude: string;

  @Column({ name: 'sensor_imu_roll' })
  sensorIMUroll: string;

  @Column({ name: 'sensor_imu_pitch' })
  sensorIMUpitch: string;

  @Column({ name: 'sensor_imu_heading' })
  sensorIMUheading: string;

  @Column({ name: 'sensor_imu_altitude' })
  sensorIMUaltitude: string;

  @Column({ name: 'sensor_ch4' })
  sensorCH4: string;

  @Column({ name: 'sensor_air_flow' })
  sensorAirFlow: string;

  @Column({ name: 'sensor_battery_level' })
  sensorBattery: string;

  @Column({ name: 'sensor_timestamp' })
  sensorTimestamp: string;


  @Column({ name: 'created_by' })
  createdBy: string;
  @Column({ name: 'created_at', default: () => `now()`, nullable: false })
  createdAt: Date;
  @Column({ name: 'updated_by' })
  updatedBy: string;
  @Column({ name: 'updated_at', default: () => `now()`, nullable: false })
  updatedAt: Date;
}
