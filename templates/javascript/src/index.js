const express = require("express")

const app = express()
const port = process.env.PORT || 3000

app.get("/", (req, res) => {
    res.send("Express Project")
})

app.listen(port, () => console.log(`This project was run in http://localhost:${port}`))