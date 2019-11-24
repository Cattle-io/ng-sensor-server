import { Entity, Column, BeforeInsert, PrimaryGeneratedColumn } from 'typeorm';

@Entity('devices')
export class DeviceEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ unique: true })
  uid: number;

  @Column()
  ip: string;

  @Column()
  port: number;

  @Column()
  name: string;

  @Column()
  description: string;

  @Column()
  picture: string;

  @Column()
  mcu: string;

  @Column({ name: 'created_by' })
  createdBy: string;

  @Column({ name: 'created_at', default: () => `now()`, nullable: false })
  createdAt: Date;

  @Column({ name: 'updated_by' })
  updatedBy: string;

  @Column({ name: 'updated_at', default: () => `now()`, nullable: false })
  updatedAt: Date;
}
