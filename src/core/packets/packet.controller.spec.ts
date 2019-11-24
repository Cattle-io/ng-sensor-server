import { Test, TestingModule } from '@nestjs/testing';
import { PacketController } from './packet.controller';

describe('PacketController Controller', () => {
  let controller: PacketController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PacketController],
    }).compile();

    controller = module.get<PacketController>(PacketController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
