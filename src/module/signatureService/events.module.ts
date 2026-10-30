import { Module } from '@nestjs/common';
import { EventsService } from './api_clients.service.js';
import { EventsController } from '../events/events.controller.js';

@Module({
  controllers: [EventsController],
  providers: [EventsService],
})
export class EventsModule {}
