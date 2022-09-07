const mongoose = require("mongoose")
const config = require("./config").config

const db = async () => {
    await mongoose.connect(config.mongo_url)
}

module.exports = db