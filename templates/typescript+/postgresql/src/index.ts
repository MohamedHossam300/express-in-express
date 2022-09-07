import express, { Application, Request, Response } from "express"
import { config } from "./config/config"

const app: Application = express()
const port: number = config.port || 3000

app.get("/", (_req: Request, res: Response): void => {
    res.send("Express + Typescript using PostgreSQL Project")
})

app.listen(port, (): void => console.log(`This project was run in http://localhost:${port}`))