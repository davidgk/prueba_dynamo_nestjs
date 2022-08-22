import { CreateTableCommand } from '@aws-sdk/client-dynamodb';
import { CreateTableInput } from '@aws-sdk/client-dynamodb/dist-types/models/models_0';
import { dbClient } from '../../config/db/config';

const userTableParams: CreateTableInput = {
  TableName: 'Users',
  KeySchema: [
    { AttributeName: 'PK', KeyType: 'HASH' },
    { AttributeName: 'SK', KeyType: 'RANGE' },
  ],
  AttributeDefinitions: [
    { AttributeName: 'PK', AttributeType: 'S' },
    { AttributeName: 'SK', AttributeType: 'S' },
  ],
  ProvisionedThroughput: {
    ReadCapacityUnits: 2,
    WriteCapacityUnits: 2,
  },
};

const command = new CreateTableCommand(userTableParams);

export const createUser = async () => {
  try {
    await dbClient.send(command);
  } catch (e) {
    console.log('ERROR:', e.message);
  }
};
