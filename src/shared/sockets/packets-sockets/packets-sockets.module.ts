import { Module } from '@nestjs/common';
import { PacketsModule } from 'src/core/packets/packets.module';

import { PacketsSocketGateway } from './packets-sockets.gateway';
import { PacketsSocketsService } from './packets-sockets.service';

@Module({
  imports: [ PacketsModule ],
  controllers: [],
  providers: [PacketsSocketGateway, PacketsSocketsService],
  exports: [PacketsSocketGateway, PacketsSocketsService],
})
export class PacketsSocketsModule {}
