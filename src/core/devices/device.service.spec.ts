import { Test, TestingModule } from '@nestjs/testing';
import { DeviceServices } from './device.service';

describe('UserServicesService', () => {
  let service: DeviceServices;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [DeviceServices],
    }).compile();

    service = module.get<DeviceServices>(DeviceServices);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
