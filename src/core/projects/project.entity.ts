import { Entity, Column, BeforeInsert, PrimaryGeneratedColumn } from 'typeorm';

@Entity('projects')
export class ProjectEntity {

  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: number;
  @Column()
  picture: number;
  @Column()
  description: number;


  @Column()
  place_name: number;
  @Column()
  place_city: number;
  @Column()
  place_country: number;
  @Column()
  place_latitude: number;
  @Column()
  place_longitude: number;


  @Column({ name: 'created_by' })
  createdBy: string;

  @Column({ name: 'created_at', default: () => `now()`, nullable: false })
  createdAt: Date;

  @Column({ name: 'updated_by' })
  updatedBy: string;

  @Column({ name: 'updated_at', default: () => `now()`, nullable: false })
  updatedAt: Date;
}
