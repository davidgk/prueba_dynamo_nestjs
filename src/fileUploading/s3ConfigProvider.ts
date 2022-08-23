import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { S3 } from 'aws-sdk';

@Injectable()
export class S3ConfigProvider {
  private readonly _s3: S3;
  private readonly _bucketName: string;

  constructor(private configService: ConfigService) {
    (this._bucketName = configService.get('AWS_BUCKET')),
      (this._s3 = new S3({
        accessKeyId: configService.get('AWS_ID'),
        secretAccessKey: configService.get('AWS_SECRET'),
        endpoint: configService.get('AWS_S3_ENDPOINT'),
        s3ForcePathStyle: true,
        region: configService.get('AWS_REGION'),
        logger: console,
      }));
  }

  getS3() {
    return this._s3;
  }

  getBucketName() {
    return this._bucketName;
  }

  createBucket(bucketName: string) {
    this.getS3().createBucket({ Bucket: bucketName }, (err, data) => {
      console.log(err, data);
    });
  }
}
