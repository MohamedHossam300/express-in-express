import { createConnection } from "mysql2"
import { config } from "./config"

const {
    host,
    user,
    password,
    database,
} = config.mysql

const db = createConnection({
    host,
    user,
    password,
    database,
})

export default db