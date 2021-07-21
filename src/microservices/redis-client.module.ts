import { Module } from '@nestjs/common';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { RedisController } from 'src/microservices/redis-client.controller';

@Module({
  imports: [
    ClientsModule.register([
      {
        name: 'REDIS_SERVICE',
        transport: Transport.REDIS,
        options: {
          url: `redis://${process.env.REDIS_HOST || ''}:6379`,
        },
      },
    ]),
  ],
  controllers: [RedisController],
})
export class RedisModule {}
