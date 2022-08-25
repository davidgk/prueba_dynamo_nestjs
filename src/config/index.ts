import { config } from 'dotenv';
config({ path: `.env.${process.env.NODE_ENV || 'dev'}` });

// If .env wasn't provided then exit
if (!process.env.PORT) {
  console.error('==> Please check your .env');
  process.exit(1);
}

export const PRODUCTION_ENV = process.env.ENV === 'prod';
export const DEV_ENV = process.env.ENV === 'dev';
export const TESTING_ENV = process.env.ENV === 'test';
export const CI_ENV = process.env.ENV === 'ci';
export const JWT_SECRET_DEFAULT = 'some-secret-string-default';
export const DYNAMO_CONFIG_DB = 'DYNAMO_CONFIG_DB';

export const {
  ENV,
  PORT,
  AWS_ID,
  AWS_SECRET,
  AWS_REGION,
  AWS_ENDPOINT,
  AWS_COGNITO_USER_POOL_ID,
  AWS_COGNITO_APP_CLIENT_ID,
} = process.env;
