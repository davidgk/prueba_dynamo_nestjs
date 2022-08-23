import {
  Body,
  Controller,
  Get,
  Param,
  Post,
  UploadedFile,
  UseInterceptors,
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { CreateBucketDto } from './create-bucket.dto';
import { FileToS3Service } from './fileToS3.service';

@Controller('/files')
export class FileToS3Controller {
  constructor(private readonly service: FileToS3Service) {}

  @Post()
  @UseInterceptors(FileInterceptor('file'))
  async upload(@Body() bucketDto: CreateBucketDto, @UploadedFile() file) {
    return await this.service.upload(file, bucketDto.name);
  }

  @Post('/createBucket')
  async createBucket(@Body() bucketDto: CreateBucketDto) {
    return await this.service.createABucket(bucketDto.name);
  }

  @Get('/:fileName/bucket/:bucketName')
  async getFileFromBucket(
    @Param('bucketName') bucketName: string,
    @Param('fileName') fileName: string,
  ) {
    return await this.service.getFileFromBuckett(bucketName, fileName);
  }
}
