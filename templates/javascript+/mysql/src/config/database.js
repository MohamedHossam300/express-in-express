const mysql = require("mysql2")
const config = require("./config").config

const {
    host,
    user,
    password,
    database,
} = config.mysql

const db = mysql.createConnection({
    host,
    user,
    password,
    database,
})

export default db