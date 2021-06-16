/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import { Controller, Get, Inject, Param } from '@nestjs/common';
import { ClientKafka } from '@nestjs/microservices';
import { Kafka } from 'kafkajs';

@Controller()
export class JavascriptProducerController {
  constructor(
    @Inject('CODE_EXECUTOR_EVENTS_PRODUCER')
    private readonly client: ClientKafka,
  ) {}

  // eslint-disable-next-line @typescript-eslint/require-await
  async onModuleInit(): Promise<void> {
    this.client.subscribeToResponseOf('javascript');
    // await this.client.connect();
  }

  // eslint-disable-next-line @typescript-eslint/require-await
  @Get('/hello/:text')
  async sayHello(@Param('text') text: string): Promise<string> {
    this.client.send('javascript', text);
    return 'yes';
  }

  // eslint-disable-next-line @typescript-eslint/require-await
  @Get('/hi/:text')
  async sayHi(@Param('text') text: string): Promise<string> {
    const client = this.client.createClient<Kafka>();
    const producer = client.producer();
    await producer.connect();
    const result = await producer.send({
      topic: 'javascript',
      messages: [{ value: text }],
    });
    await producer.disconnect();
    return JSON.stringify(result);
  }

  @Get('/')
  async createTopics(): Promise<string> {
    const client = this.client.createClient<Kafka>();

    const admin = client.admin();
    try {
      await admin.connect();

      const numPartitions = 3;
      const flag = await admin.createTopics({
        topics: [
          {
            topic: 'javascript',
            numPartitions,
          },
          {
            topic: 'java',
            numPartitions,
          },
          {
            topic: 'golang',
            numPartitions,
          },
          {
            topic: 'python',
            numPartitions,
          },
        ],
      });
      if (!flag) {
        return 'Create topics fail!';
      }

      const topics = await admin.listTopics();

      await admin.disconnect();
      return `Create topics successfully! ${JSON.stringify(topics)}`;
    } catch (error) {
      return `Create topics fail! ${JSON.stringify(error)}`;
    }
  }
}
