import { Module } from '@nestjs/common';
import { ConfigProjModule } from '../config/config.module';
import { FileToS3Controller } from './fileToS3.controller';
import { FileToS3Service } from './fileToS3.service';

@Module({
  imports: [ConfigProjModule],
  controllers: [FileToS3Controller],
  providers: [FileToS3Service],
})
export class FileToS3Module {}
