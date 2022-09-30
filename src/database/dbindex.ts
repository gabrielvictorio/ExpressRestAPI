import mongoose from "mongoose"

mongoose.connect("mongodb://0.0.0.0:27017/")
mongoose.Promise = global.Promise

export {mongoose}