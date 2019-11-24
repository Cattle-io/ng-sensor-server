export interface PacketSocketModel {
  uid: string;
  timestamp: string;
  temperature: string;
  humidity: string;
  gps: {
    latitude: string;
    longitude: string;
  };
  imu: {
    roll: string;
    pitch: string;
    heading: string;
    altitude: string;
  };
  ch4: string;
  airFlow: string;
  batteryLevel: string;
}
