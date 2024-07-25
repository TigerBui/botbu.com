import mongoose, { Schema, Document } from 'mongoose';

export interface User extends Document {
  createDate: Date;
  userName: String;
  password: String;
  email: String;
  webApp: String;
  phoneMain: String;
  phoneSub: String;
}

const UsersSchema: Schema = new Schema({
  createDate: { type: Date, default: new Date() },
  userName: { type: String },
  password: { type: String, required: true},
  email: { type: String },
  webApp: { type: String, required: true },
  phoneMain: { type: String },
  phoneSub: { type: String }
});

const Privacy =  mongoose.model<User>('Users', UsersSchema)
export default Privacy;
