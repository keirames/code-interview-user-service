import { NestFactory } from '@nestjs/core';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';
import AppModule from 'src/app.module';

async function bootstrap(): Promise<void> {
  // const app = await NestFactory.create(AppModule);
  // Microservice TCP
  // const microserviceTCP = app.connectMicroservice({
  //   transport: Transport.TCP,
  //   options: { host: '0.0.0.0', port: 3001 },
  // });
  // Microservice kafka
  // const microserviceKafka = app.connectMicroservice({
  //   transport: Transport.KAFKA,
  //   options: {
  //     client: {
  //       clientId: 'hero',
  //       brokers: [`${process.env.KAFKA_HOST}:9092`],
  //     },
  //     consumer: {
  //       groupId: 'hero-consumer',
  //     },
  //   },
  // });
  // await app.startAllMicroservicesAsync();
  // await app.listen(3001);
  // const app = await NestFactory.createMicroservice<MicroserviceOptions>(
  //   AppModule,
  //   { transport: Transport.TCP, options: { host: '0.0.0.0', port: 3002 } },
  // );
  // app.listen(() =>
  //   console.log('UserService microservice is listening on 3002'),
  // );

  const app = await NestFactory.create(AppModule);

  app.enableCors({ allowedHeaders: '*' });

  await app.listen(3001, () => console.log('Listening on port 3001'));
}
// eslint-disable-next-line @typescript-eslint/no-floating-promises
bootstrap();
