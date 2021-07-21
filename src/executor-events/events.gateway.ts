import {
  MessageBody,
  SubscribeMessage,
  WebSocketGateway,
  WebSocketServer,
} from '@nestjs/websockets';
import { Server } from 'socket.io';

@WebSocketGateway({ cors: '*' })
export class EventsGateway {
  // @WebSocketServer()
  // private readonly server!: Server;

  @SubscribeMessage('events')
  handleEvent(@MessageBody() data: string): any {
    console.log(data);
    // return { event: 'events', data };
    return data;
  }
}
