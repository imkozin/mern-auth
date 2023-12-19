import {Schema, model} from 'mongoose'

const userSchema = new Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    dateOfBirth: {
      type: Date,
      required: true,
    },
    sex: {
      type: String,
      required: true,
    },
    avatarUrl: String,
  },
  { timestamps: true }
)

const User = model('User', userSchema)

export default User;