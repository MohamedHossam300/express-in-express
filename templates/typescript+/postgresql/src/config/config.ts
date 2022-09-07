import * as dotenv from "dotenv"

dotenv.config()

export const config = {
    port: <number><unknown>process.env.PORT,
    postgreSQL: {
        user: <string>process.env.POSTGRE_USER,
        password: <string>process.env.POSTGRE_PASSWORD,
        database: <string>process.env.POSTGRE_DB,
        host: <string>process.env.POSTGRE_HOST,
        port: <number><unknown>process.env.POSTGRE_PORT,
    }
}