import { Schema, model } from 'mongoose';
import { User} from './user.interface';
import bcrypt from 'bcrypt'
import config from '../../config';

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
//pre save middleware
userSchema.pre('save',async function(next){
//hash password

//const user = this;
const user = this as User;

  user.password = await bcrypt.hash(user.password, Number(config.bcrypt_salt_rounds));



  //console.log(this);
  next();
console.log(this);

})

//post save middleware
userSchema.post('save',async function(doc,next){
//hash password
doc.password='';

next();
})





export const userModel =model<User>('user',userSchema);