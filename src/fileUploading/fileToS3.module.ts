import { Module } from '@nestjs/common';
import { ConfigProjectModule } from '../config/config.module';
import { FileToS3Controller } from './fileToS3.controller';
import { FileToS3Service } from './fileToS3.service';
import { S3ConfigProvider } from './s3ConfigProvider';

@Module({
  imports: [ConfigProjectModule],
  controllers: [FileToS3Controller],
  providers: [FileToS3Service, S3ConfigProvider],
})
export class FileToS3Module {}
