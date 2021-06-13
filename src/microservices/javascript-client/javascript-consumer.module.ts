import { Module } from '@nestjs/common';
import { ClientsModule, Transport } from '@nestjs/microservices';

@Module({
  imports: [
    ClientsModule.register([
      {
        name: 'JAVASCRIPT_SERVICE',
        transport: Transport.KAFKA,
        options: {
          client: {
            clientId: 'javascript-code-executor',
            brokers: [`${process.env.KAFKA_HOST || ''}:9092`],
          },
          consumer: {
            groupId: 'javascript',
          },
        },
      },
    ]),
  ],
})
export class JavascriptConsumerModule {}
