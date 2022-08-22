import { DynamoDBClient } from '@aws-sdk/client-dynamodb';
import { DynamoDBDocumentClient } from '@aws-sdk/lib-dynamodb';
import { Credentials } from '@aws-sdk/types';
import { AWS_ENDPOINT, AWS_ID, AWS_REGION, AWS_SECRET, ENV } from '../index';
console.log('ENV:', ENV);
function createCredentials(): Credentials {
  return {
    accessKeyId: AWS_ID,
    expiration: undefined,
    secretAccessKey: AWS_SECRET,
  };
}

export const dynamoClient = new DynamoDBClient({
  endpoint: AWS_ENDPOINT,
  credentials: createCredentials(),
});
console.log('endpoint:', AWS_ENDPOINT);
console.log('region:', AWS_REGION);
console.log('AWS_ID:', AWS_ID);
console.log('AWS_SECRET:', AWS_SECRET);
const marshallOptions = {
  // Whether to automatically convert empty strings, blobs, and sets to `null`.
  convertEmptyValues: false, // false, by default.
  // Whether to remove undefined values while marshalling.
  removeUndefinedValues: false, // false, by default.
  // Whether to convert typeof object to map attribute.
  convertClassInstanceToMap: false, // false, by default.
};

const unmarshallOptions = {
  // Whether to return numbers as a string instead of converting them to native JavaScript numbers.
  wrapNumbers: false, // false, by default.
};

const translateConfig = { marshallOptions, unmarshallOptions };

export const dbClient = DynamoDBDocumentClient.from(
  dynamoClient,
  translateConfig,
);
