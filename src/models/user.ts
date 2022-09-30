import { InferSchemaType } from 'mongoose'
import {mongoose} from '../database/dbindex'

const UserSchema = new mongoose.Schema({
    email:{
        type: String,
        lowercase: true,
        required: true,
    },
    createdAt:{
        type: Date,
        default: Date.now,
    }
})

type User = InferSchemaType<typeof UserSchema>

const User = mongoose.model('User', UserSchema)

export {User}