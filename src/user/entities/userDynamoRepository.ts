import {
  DeleteCommand,
  DeleteCommandInput,
  GetCommand,
  GetCommandInput,
  PutCommand,
  PutCommandInput,
  ScanCommand,
  ScanCommandInput,
} from '@aws-sdk/lib-dynamodb';
import { dbClient } from '../../config/db/config';
import { User } from './user.entity';

export const getAllUser = async () => {
  const getUserParams: ScanCommandInput = {
    TableName: 'Users',
  };
  const command = new ScanCommand(getUserParams);
  return await dbClient.send(command);
};

export const getUserById = async (userId: string) => {
  const getUserParams: GetCommandInput = {
    TableName: 'Users',
    Key: {
      PK: 'USERS',
      SK: userId,
    },
  };
  const command = new GetCommand(getUserParams);
  return await dbClient.send(command);
};

export const deleteUserById = async (userId: string) => {
  const deleteUserParams: DeleteCommandInput = {
    TableName: 'Users',
    Key: {
      PK: 'USERS',
      SK: userId,
    },
  };
  const command = new DeleteCommand(deleteUserParams);
  return await dbClient.send(command);
};

export const putUser = async (user: User) => {
  const putUserParams: PutCommandInput = {
    TableName: 'Users',
    Item: {
      PK: 'USERS',
      SK: user.id,
      name: user.name,
      age: user.age,
    },
  };
  const command = new PutCommand(putUserParams);
  return await dbClient.send(command);
};
