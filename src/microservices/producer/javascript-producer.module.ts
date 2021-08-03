import { Module } from '@nestjs/common';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { TestCasesModule } from 'src/features/test-cases/test-cases.module';
import { JavascriptProducerController } from 'src/microservices/producer/javascript-producer.controller';

@Module({
  imports: [
    ClientsModule.register([
      {
        name: 'CODE_EXECUTOR_EVENTS_PRODUCER',
        transport: Transport.KAFKA,
        options: {
          client: {
            brokers: [`${process.env.KAFKA_HOST || ''}:39092`],
          },
        },
      },
    ]),
    TestCasesModule,
  ],
  controllers: [JavascriptProducerController],
})
export class JavascriptProducerModule {}
