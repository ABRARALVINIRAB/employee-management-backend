// users.model.ts

import { Schema, model, Document } from 'mongoose';
import { IUser } from './users.interface';

export interface IUserModel extends IUser, Document {}

const userSchema = new Schema<IUser>({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true }, // Make email field unique
  gender: { type: String, required: true },
  phoneNumber: { type: String, required: true },
  employeeId: { type: String, required: true ,unique: true},
  
  isApproved: { type: Boolean, default: false },
  // Add any other user-related fields here
});


export const User = model<IUserModel>('User', userSchema);
