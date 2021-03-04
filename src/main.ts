import { NestFactory } from '@nestjs/core';
import { Transport } from '@nestjs/microservices';
import { AppModule } from './app.module';

async function bootstrap(): Promise<void> {
  const app = await NestFactory.create(AppModule);

  // Microservice TCP
  const microserviceTCP = app.connectMicroservice({
    transport: Transport.TCP,
    options: { host: '0.0.0.0', port: 3001 },
  });

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

  await app.startAllMicroservicesAsync();
  await app.listen(3000);
  console.log(`Listening on port ${3000}`);
}
bootstrap();
