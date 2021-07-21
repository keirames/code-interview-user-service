import { Controller, Get, Inject, Injectable } from '@nestjs/common';
import {
  ClientProxy,
  EventPattern,
  MessagePattern,
  Payload,
} from '@nestjs/microservices';

@Controller()
export class RedisController {
  constructor(
    @Inject('REDIS_SERVICE')
    private readonly client: ClientProxy,
  ) {}

  // async onModuleInit(): Promise<void> {
  //   console.log('connect to redis service');
  //   await this.client.connect();
  // }
  // async onApplicationBootstrap(): Promise<void> {
  //   await this.client.connect();
  //   console.log('connecteed');
  // }

  @Get('/save')
  testSave(): void {
    // console.log(JSON.stringify(this.client, null, 2));
    this.client.emit('javascript-execute-result', 'hello');
  }

  @MessagePattern('javascript-execute-result')
  getExecuteResult(@Payload() data: any): void {
    console.log(data);
  }
}
