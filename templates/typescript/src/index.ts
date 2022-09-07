import express, { Application, Request, Response } from "express"
import { config } from "dotenv"

config()

const app: Application = express()
const port: number = <number><unknown>process.env.PORT || 3000

app.get("/", (_req: Request, res: Response): void => {
    res.send("Express + Typescript Project")
})

app.listen(port, (): void => console.log(`This project was run in http://localhost:${port}`))