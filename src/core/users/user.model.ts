export interface UserModel {
  id: number;

  name: string;
  email: string;
  password: string;

  rol: string;
  projects: string[];

  createdBy: string;
  updatedBy: string;

  createdAt: Date;
  updatedAt: Date;
}
