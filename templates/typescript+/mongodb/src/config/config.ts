import * as dotenv from "dotenv"

dotenv.config()

export const config = {
    port: <number><unknown>process.env.PORT,
    mongo_url: <string>process.env.MONGO_URL
}