import { connect } from "mongoose"
import { config } from "./config"

const db = async (): Promise<void> => {
    await connect(config.mongo_url)
}

export default db