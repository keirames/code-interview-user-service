import { Controller, Get, Inject } from '@nestjs/common';
import {
  ClientProxy,
  EventPattern,
  MessagePattern,
  Payload,
} from '@nestjs/microservices';
import { RedisClient } from 'redis';

@Controller()
export class AppController {
  // constructor(
  //   @Inject('REDIS_SERVICE')
  //   private readonly client: ClientProxy,
  // ) {}
  // async onModuleInit(): Promise<void> {
  //   console.log('connect to redis service');
  //   await this.client.connect();
  // }
  // @Get('/save')
  // testSave(): void {
  //   // console.log(JSON.stringify(this.client, null, 2));
  //   this.client.emit('javascript-execute-result', 'hello');
  // }
  // @EventPattern('javascript-execute-result')
  // getExecuteResult(@Payload() data: any): void {
  //   console.log(data);
  // }
}
