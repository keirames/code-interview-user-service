import { Inject, Injectable } from '@nestjs/common';
import { ClientKafka } from '@nestjs/microservices';
import { Kafka } from '@nestjs/microservices/external/kafka.interface';
import { TestCasesService } from 'src/features/test-cases/test-cases.service';
import { TestInputsService } from 'src/features/test-inputs/test-inputs.service';

// ? Split this interface properly
interface DeliveryContent {
  user: {
    id: number;
  };
  userListeningChannel: string;
  testInputs: string[];
  testAssertions: string[];
}

@Injectable()
export class JavascriptProducerService {
  constructor(
    @Inject('CODE_EXECUTOR_EVENTS_PRODUCER')
    private readonly client: ClientKafka,

    private readonly testCasesService: TestCasesService,
    private readonly testInputsService: TestInputsService,
  ) {}

  private async generateDeliveryContent(
    uniqueEventName: string,
  ): Promise<DeliveryContent> {
    const testCases = await this.testCasesService.findByChallengeId(2);

    const transformedTestAssertions = testCases.map((tc) => tc.testString);

    const testInputs = await this.testInputsService.findByChallengeId(2);

    const transformedTestInputs = testInputs.map((ti) => ti.input);

    const deliverContent: DeliveryContent = {
      user: {
        id: 123,
      },
      userListeningChannel: uniqueEventName,
      testInputs: transformedTestInputs,
      testAssertions: transformedTestAssertions,
    };

    return deliverContent;
  }

  async executeCode(uniqueEventName: string): Promise<string> {
    const deliveryContent = await this.generateDeliveryContent(uniqueEventName);

    const client = this.client.createClient<Kafka>();
    const producer = client.producer();
    await producer.connect();

    const result = await producer.send({
      topic: 'javascript',
      messages: [{ value: JSON.stringify(deliveryContent) }],
    });
    await producer.disconnect();
    return JSON.stringify(result);
  }
}
