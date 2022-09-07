const pg = require("pg")
const config = require("./config").config

const {
    user,
    password,
    database,
    host,
    port
} = config.postgreSQL

const db = new pg.Pool({
    user,
    password,
    database,
    host,
    port
})

export default db
