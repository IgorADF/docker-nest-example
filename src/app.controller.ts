import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { createWriteStream } from 'node:fs';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('example')
  getExample(): string {
    return this.appService.getExample();
  }

  @Get('example-fs')
  getExampleFs(): string {
    const file = createWriteStream('testecarga.txt');

    for (let index = 0; index <= 1000; index++) {
      file.write('estou escrevendo no arquivo\n');
    }

    file.end();
    return 'fim';
  }
}
