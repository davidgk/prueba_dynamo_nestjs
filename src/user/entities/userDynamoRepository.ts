import {
  DeleteCommand,
  DeleteCommandInput,
  DynamoDBDocumentClient,
  GetCommand,
  GetCommandInput,
  PutCommand,
  PutCommandInput,
  ScanCommand,
  ScanCommandInput
} from '@aws-sdk/lib-dynamodb';
import { Inject, Injectable } from '@nestjs/common';
import { DYNAMO_CONFIG_DB } from '../../config';
import { User } from './user.entity';

@Injectable()
export class UserDynamoRepository {
  constructor(
    @Inject(DYNAMO_CONFIG_DB) private dbClient: DynamoDBDocumentClient,
  ) {}

  async getAllUser() {
    const getUserParams: ScanCommandInput = {
      TableName: 'Users',
    };
    const command = new ScanCommand(getUserParams);
    return await this.dbClient.send(command);
  }

  async getUserById(userId: string) {
    const getUserParams: GetCommandInput = {
      TableName: 'Users',
      Key: {
        PK: 'USERS',
        SK: userId,
      },
    };
    const command = new GetCommand(getUserParams);
    return await this.dbClient.send(command);
  }

  async deleteUserById(userId: string) {
    const deleteUserParams: DeleteCommandInput = {
      TableName: 'Users',
      Key: {
        PK: 'USERS',
        SK: userId,
      },
    };
    const command = new DeleteCommand(deleteUserParams);
    return await this.dbClient.send(command);
  }

  async putUser(user: User) {
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
    return await this.dbClient.send(command);
  }
}
