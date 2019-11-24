import { Test, TestingModule } from '@nestjs/testing';
import { PacketServices } from './packet.service';

describe('UserServicesService', () => {
  let service: PacketServices;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PacketServices],
    }).compile();

    service = module.get<PacketServices>(PacketServices);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
