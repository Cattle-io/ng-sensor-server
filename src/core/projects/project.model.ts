export interface ProjectModel {
  id: number;

  name: string;
  picture: string;
  description: string;

  place_name: string;
  place_city: string;
  place_country: string;
  place_latitude: number;
  place_longitude: number;

  createdBy: string;
  updatedBy: string;

  createdAt: Date;
  updatedAt: Date;
}
