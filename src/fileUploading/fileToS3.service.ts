import { Injectable } from '@nestjs/common';

@Injectable()
export class FileToS3Service {
  getHello(): string {
    return 'Hello World!';
  }
}
