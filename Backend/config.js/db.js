const mongoose=require("mongoose")
require("dotenv").config()
const connection=mongoose.connection(process.mongoose_url)

module.exports={connection}