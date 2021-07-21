import { Module } from '@nestjs/common';
import { EventsGateway } from 'src/executor-events/events.gateway';

@Module({ providers: [EventsGateway] })
export class EventsModule {}
