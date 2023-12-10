import { Schema, model } from 'mongoose';
import { User} from './user.interface';

const userSchema= new Schema<User>({
  userId: { type: Number, required: true },
  username: { type: String, required: true },
  password: { type: String, required: true },
  fullName: { firstName: String, lastName: String },
  age: { type: Number, required: true },
  email:{ type: String, required: true },
  isActive: ['active','non-active'],
  hobbies: [String],
  address: { street: String, city: String, country: String },
  orders: [{ productName: String, price: Number, quantity: Number }],
});

export const userModel =model<User>('user',userSchema);