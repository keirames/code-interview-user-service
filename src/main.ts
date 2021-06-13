import { NestFactory } from '@nestjs/core';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';
import AppModule from 'src/app.module';

//  todo: Fix with env
async function bootstrap(): Promise<void> {
  const app = await NestFactory.create(AppModule);

  // Enable cors middleware
  app.enableCors({ allowedHeaders: '*' });

  // Microservice TCP
  // const microserviceTCP = app.connectMicroservice({
  //   transport: Transport.TCP,
  //   options: { host: '0.0.0.0', port: 3001 },
  // });

  // Microservice kafka
  const microserviceKafka = {
    transport: Transport.KAFKA,
    options: {
      client: {
        client: 'master-producer',
        brokers: [`${process.env.KAFKA_HOST || ''}:9092`],
      },
      consumer: {
        groupId: 'javascript',
      },
    },
  };
  app.connectMicroservice(microserviceKafka);

  await app.startAllMicroservicesAsync();
  await app.listen(3001);
  // const app = await NestFactory.createMicroservice<MicroserviceOptions>(
  //   AppModule,
  //   { transport: Transport.TCP, options: { host: '0.0.0.0', port: 3002 } },
  // );
  // app.listen(() =>
  //   console.log('UserService microservice is listening on 3002'),
  // );
}
// eslint-disable-next-line @typescript-eslint/no-floating-promises
bootstrap();
