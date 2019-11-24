export interface DeviceModel {
  id: number;

  uid: string;
  name: string;
  description: string;
  picture: string;

  ip: string;
  port: number;
  mcu: string;

  

  createdBy: string;
  updatedBy: string;

  createdAt: Date;
  updatedAt: Date;

  connectedAt: Date;
}
