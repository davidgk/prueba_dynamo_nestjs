import { Schema } from 'dynamoose';

export const UserSchema = new Schema({
  id: {
    type: String,
    hashKey: true,
  },
  name: {
    type: String,
  },
  description: {
    type: String,
  },
});

export const UserModel = { name: 'Users', schema: UserSchema };
