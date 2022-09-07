const dotenv = require("dotenv")

dotenv.config()

module.exports.config = {
    port: process.env.PORT,
    mysql: {
        host: process.env.MYSQL_HOST,
        user: process.env.MYSQL_USER,
        password: process.env.MYSQL_PASSWORD,
        database: process.env.MYSQL_DB,
    }
}