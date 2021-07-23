import { Controller } from '@nestjs/common';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { EventsGateway } from 'src/executor-events/events.gateway';

@Controller()
export class RedisController {
  constructor(private readonly eventGateway: EventsGateway) {}

  @MessagePattern('javascript-execute-result')
  getExecuteResult(@Payload() data: [string, boolean]): void {
    // First part is user identifier socket channel
    const [socketChannel, result] = data;

    this.eventGateway.getSocketServer().emit(socketChannel, result);
  }
}
