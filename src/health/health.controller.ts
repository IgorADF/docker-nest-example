import { Controller, Get } from '@nestjs/common';
import { HealthService } from './health.service';

@Controller()
export class HealthController {
  constructor(private readonly service: HealthService) {}

  @Get('/healthz')
  getHealth(): string {
    this.service.checkHealth();
    return 'Ok!';
  }

  @Get('/readyz')
  getReady(): string {
    this.service.checkReady();
    return 'Ok!';
  }
}
