import mongoose from "mongoose"

mongoose.connect(`${process.env.DATABASE_URL}`)
mongoose.Promise = global.Promise

export {mongoose}