import {
  MessageBody,
  SubscribeMessage,
  WebSocketGateway,
  WebSocketServer,
} from '@nestjs/websockets';
import { Server } from 'socket.io';

@WebSocketGateway({ port: 80, namespace: 'code-execute-events', cors: '*' })
export class EventsGateway {
  @WebSocketServer()
  private readonly server!: Server;

  getSocketServer(): Server {
    return this.server;
  }

  @SubscribeMessage('events')
  static handleEvent(@MessageBody() data: string): any {
    console.log(data);
    // return { event: 'events', data };
    return data;
  }
}
