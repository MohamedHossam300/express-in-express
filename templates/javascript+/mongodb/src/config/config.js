const dotenv = require("dotenv")

dotenv.config()

module.exports.config = {
    port: process.env.PORT,
    mongo_url: process.env.MONGO_URL
}