import { Controller } from '@nestjs/common';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { EventsGateway } from 'src/executor-events/events.gateway';

type CodeExecuteResult = [string, boolean];

@Controller()
export class RedisController {
  constructor(private readonly eventGateway: EventsGateway) {}

  @MessagePattern('javascript-execute-result')
  getExecuteResult(@Payload() data: string): void {
    // First part is user identifier socket channel
    const [socketChannel, result] = JSON.parse(data) as CodeExecuteResult;

    this.eventGateway.getSocketServer().emit(socketChannel, result);
  }
}
