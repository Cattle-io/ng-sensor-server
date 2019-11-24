import { Module } from '@nestjs/common';

import { PacketsSocketsModule } from './packets-sockets/packets-sockets.module';
@Module({
  imports: [PacketsSocketsModule],
  controllers: [],
  providers: [],
  exports: []
})
export class SocketsModule {}
