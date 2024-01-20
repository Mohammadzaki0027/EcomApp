const mongoose=require("mongoose")
require("dotenv").config()
let url=process.env.mongoose_url
console.log('Url',url)
const connection=mongoose.connect(process.env.mongoose_url)
module.exports={connection}