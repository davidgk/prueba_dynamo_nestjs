import { Controller, Get } from '@nestjs/common';
import { FileToS3Service } from './fileToS3.service';

@Controller('/files')
export class FileToS3Controller {
  constructor(private readonly service: FileToS3Service) {}

  @Get()
  getHello(): string {
    return this.service.getHello();
  }
}
