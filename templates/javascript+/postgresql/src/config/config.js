const dotenv = require("dotenv")

dotenv.config()

module.exports.config = {
    port: process.env.PORT,
    postgreSQL: {
        user: process.env.POSTGRE_USER,
        password: process.env.POSTGRE_PASSWORD,
        database: process.env.POSTGRE_DB,
        host: process.env.POSTGRE_HOST,
        port: process.env.POSTGRE_PORT,
    }
}