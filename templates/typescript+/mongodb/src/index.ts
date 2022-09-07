import express, { Application, Request, Response } from "express"
import { config } from "./config/config"
import db from "./config/database"

const app: Application = express()
const port: number = config.port || 3000

db()
    .then(() => console.log("mongodb is connecting"))
    .catch(err => console.error(err))

app.get("/", (_req: Request, res: Response): void => {
    res.send("Express + Typescript using MongoDB Project")
})

app.listen(port, (): void => console.log(`This project was run in http://localhost:${port}`))