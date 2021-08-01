import { Module } from '@nestjs/common';
import { EventsGateway } from 'src/executor-events/events.gateway';

@Module({ providers: [EventsGateway], exports: [EventsGateway] })
export class EventsModule {}
