import {
  SubscribeMessage,
  WebSocketGateway,
  OnGatewayInit,
  WebSocketServer,
  OnGatewayConnection,
  OnGatewayDisconnect,
} from '@nestjs/websockets';
import { Logger } from '@nestjs/common';
import { Socket, Server } from 'socket.io';
import { PacketSocketModel } from './packets-sockets.model';

@WebSocketGateway()
export class PacketsSocketGateway implements OnGatewayInit, OnGatewayConnection, OnGatewayDisconnect  {

  @WebSocketServer() server: Server;
  private logger: Logger = new Logger('PacketsSocketsGateway');

  afterInit(server: Server) {
    this.logger.log('Init');
  }
  handleDisconnect(client: Socket) {
    this.logger.log(`Client disconnected: ${client.id}`);
  }
  handleConnection(client: Socket, ...args: any[]) {
    this.logger.log(`Client connected: ${client.id}`);
  }

  @SubscribeMessage('packetToServer')
  handlePacketMessage(client: Socket, payload: any): void {

     const packetName: string = 'DEVICE_LOG';
     const packetMessage: PacketSocketModel   = JSON.parse(payload);
    this.logger.log(`WS Message Get : name ${packetName} message ${packetMessage}`);
    this.logger.log(`WS Message Get ${JSON.stringify(payload)}`);

    /*
    const packetName: string = payload.name;
    const packetMessage: PacketSocketModel   = JSON.parse(payload.text);
    this.logger.log(' WebSockets::Packets => Init Processing Packet = ' + JSON.stringify(packetMessage));
    this.server.emit('msgToClient', JSON.stringify(payload));
    this.packetsSocketsServices.savePacketInDatabase(packetMessage)
        .then(response => {
            this.logger.log(' WebSockets::Packets => ' + JSON.stringify(response));
        })
        .catch(error => {
            this.logger.error(' WebSockets::ERRR => ' + JSON.stringify(error));
        });
        */
  }
}
