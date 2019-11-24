import { Entity, Column, BeforeInsert, PrimaryGeneratedColumn } from 'typeorm';

@Entity('users')
export class UserEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column('text')
  name: string;

  @Column({ unique: true })
  email: string;

  @Column()
  password: string;

  @Column()
  rol: string;

  @Column({ name: 'projects', type: 'json' })
  projects: string[];

  @Column({ name: 'created_by'})
  createdBy: string;

  @Column({ name: 'created_at', default: () => `now()`, nullable: false })
  createdAt: Date;

  @Column({ name: 'updated_by'})
  updatedBy: string;

  @Column({ name: 'updated_at', default: () => `now()`, nullable: false })
  updatedAt: Date;

  @Column({ name: 'connected_at', default: () => `now()`, nullable: false })
  connectedAt: Date;



}
