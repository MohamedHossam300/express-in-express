const express = require("express")
const config = require("./config/config").config
const db = require("./config/database")

const app= express()
const port = config.port || 3000

db()
    .then(() => console.log("mongodb is connecting"))
    .catch(err => console.error(err))

app.get("/", (req, res) => {
    res.send("Express + Typescript using MongoDB Project")
})

app.listen(port, () => console.log(`This project was run in http://localhost:${port}`))