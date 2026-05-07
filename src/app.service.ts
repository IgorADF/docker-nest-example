import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class AppService {
  constructor(private configService: ConfigService) {}

  getHello(): string {
    return 'Hello World!';
  }

  getExample(): string {
    const envVar = this.configService.get<string>('MY_ENV_TEST') as string;

    const secretEnvVar = this.configService.get<string>(
      'MY_SECRET_ENV',
    ) as string;
    console.log(secretEnvVar);

    return 'This is your example with env var: ' + envVar;
  }
}
