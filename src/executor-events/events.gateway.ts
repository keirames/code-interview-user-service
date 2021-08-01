import {
  MessageBody,
  SubscribeMessage,
  WebSocketGateway,
  WebSocketServer,
} from '@nestjs/websockets';
import { Server } from 'socket.io';

@WebSocketGateway({ port: 80, cors: '*' })
export class EventsGateway {
  @WebSocketServer()
  private readonly server!: Server;

  getSocketServer(): Server {
    return this.server;
  }

  // Using static gonna break this handler (not execute)
  @SubscribeMessage('events')
  // eslint-disable-next-line class-methods-use-this
  handleEvent(@MessageBody() data: string): any {
    console.log(data);
    // return { event: 'events', data };
    return data;
  }

  // Using static gonna break this handler (not execute)
  @SubscribeMessage('code-execute-result')
  // eslint-disable-next-line class-methods-use-this
  handleCodeExecutorEvents(@MessageBody() data: string): any {
    console.log(data);
    // return { event: 'events', data };
    // return data;
  }
}
