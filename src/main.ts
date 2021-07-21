import { NestFactory } from '@nestjs/core';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';
import AppModule from 'src/app.module';

//  todo: Fix with env
async function bootstrap(): Promise<void> {
  // const app = await NestFactory.create(AppModule);

  // // Enable cors middleware
  // app.enableCors({ allowedHeaders: '*' });

  // await app.listen(3001, () => console.log('Listening on 3002'));

  const app = await NestFactory.create(AppModule);

  // Enable cors middleware
  app.enableCors({ allowedHeaders: '*' });

  // Redis server for code execute result
  app.connectMicroservice({
    name: 'REDIS_SERVICE',
    transport: Transport.REDIS,
    options: {
      url: `redis://${process.env.REDIS_HOST || ''}:6379`,
    },
  });

  await app.startAllMicroservicesAsync();
  await app.listen(3001, () => console.log('Listening on 3002'));

  // Microservice TCP
  // const microserviceTCP = app.connectMicroservice({
  //   transport: Transport.TCP,
  //   options: { host: '0.0.0.0', port: 3001 },
  // });

  // Microservice kafka
  // const microserviceKafka = {
  //   name: 'CODE_EXECUTE_EVENTS',
  //   transport: Transport.KAFKA,
  //   options: {
  //     client: {
  //       client: 'master-producer',
  //       brokers: [`${process.env.KAFKA_HOST || ''}:9092`],
  //     },
  //     consumer: {
  //       groupId: 'javascript',
  //     },
  //   },
  // };
  // app.connectMicroservice(microserviceKafka);

  // await app.startAllMicroservicesAsync();
  // await app.listen(3001);
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
