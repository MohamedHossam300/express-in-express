import { Pool } from "pg"
import { config } from "./config"

const {
    user,
    password,
    database,
    host,
    port
} = config.postgreSQL

const db = new Pool({
    user,
    password,
    database,
    host,
    port
})

export default db