import { Schema } from 'dynamoose';

export const TaskSchema = new Schema({
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
