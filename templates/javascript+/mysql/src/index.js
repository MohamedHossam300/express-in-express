const express = require("express")
const config = require("./config/config").config

const app= express()
const port = config.port || 3000

app.get("/", (req, res) => {
    res.send("Express using MySQL Project")
})

app.listen(port, () => console.log(`This project was run in http://localhost:${port}`))