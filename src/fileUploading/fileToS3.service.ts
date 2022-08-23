import { Injectable, Logger } from '@nestjs/common';
import { S3 } from 'aws-sdk';
import * as fs from 'fs';
import path from 'path';
import { S3ConfigProvider } from './s3ConfigProvider';

@Injectable()
export class FileToS3Service {
  private readonly s3Provider: S3ConfigProvider;

  constructor(private provider: S3ConfigProvider) {
    this.s3Provider = provider;
    // this guy should run one time
    //this.s3Provider.createBucket();
  }

  async createABucket(bucketName: string) {
    this.s3Provider.createBucket(bucketName);
  }

  async upload(file, bucketName?: string) {
    const { originalname } = file;
    if (!originalname) return { error: 'should send a file'}
    const S3bucket = bucketName || this.s3Provider.getBucketName();
    return await this.uploadS3(file.buffer, S3bucket, originalname);
  }
// https://backend-target.s3.sa-east-1.amazonaws.com/davidgk/exampleMp4.mp4
  async uploadS3(file, bucket, name) {
    const s3 = this.s3Provider.getS3();
    const s3Params = {
      Bucket: bucket,
      Key: 'davidgk/'+ String(name),
      Body: file,
    };

    const data = await this.uploadImageToS3(s3, s3Params);
    return data;
  }

  async uploadImageToS3(s3: S3, s3Params) {
    return new Promise((resolve, reject) => {
      s3.upload(s3Params, (err, data) => {
        if (err) {
          Logger.error(err);
          reject(err);
        }
        resolve(data);
      });
    });
  }

  async getFileFromBuckett(
    bucketName: string,
    fileName: string,
  ) {
    const s3Params = { Bucket: bucketName, Key: fileName };
    //const targetFile = path.resolve(targetPath);
    //const target = fs.createWriteStream(targetFile);
    const data = await this.s3Provider.getS3().getObject(s3Params);
    return data;
  }
}
