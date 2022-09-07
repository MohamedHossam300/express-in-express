import * as dotenv from "dotenv"

dotenv.config()

export const config = {
    port: <number><unknown>process.env.PORT,
    mysql: {
        host: <string>process.env.MYSQL_HOST,
        user: <string>process.env.MYSQL_USER,
        password: <string>process.env.MYSQL_PASSWORD,
        database: <string>process.env.MYSQL_DB,
    }
}