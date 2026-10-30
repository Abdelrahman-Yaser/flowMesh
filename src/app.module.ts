import { Module } from '@nestjs/common';
import { createObserveModule } from '@nestjs/observe';
import { EventsModule } from './module/events/events.module.js';

export const { ObserveModule, ObserveInstrument } = createObserveModule();

@Module({
  imports: [
    // Distributed tracing, auto-correlated logs, request/job metrics, error
    // telemetry, alarms, and more — out of the box. Sign up at https://observe.nestjs.com
    ObserveModule.forRoot({
      appKey: 'DZ&yxUEFoGDS9dk0',
      appSecret: 'cn%7Q8tHq8dD7i!Ci!bthtGTGf5OHsn!AQcGITQkqQzW8',
      serviceId: 'flowmesh',
    }),
  ],
  controllers: [EventsModule],
  providers: [],
})
export class AppModule {}
