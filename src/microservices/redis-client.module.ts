import { Module } from '@nestjs/common';
import { EventsModule } from 'src/executor-events/events.module';
import { RedisController } from 'src/microservices/redis-client.controller';

@Module({
  imports: [EventsModule],
  controllers: [RedisController],
})
export class RedisModule {}
