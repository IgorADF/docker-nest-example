import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class HealthService {
  constructor(private configService: ConfigService) {}

  checkHealth(): boolean {
    return true;
  }

  checkReady(): boolean {
    return true;
  }
}
