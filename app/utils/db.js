const mongoose = require("mongoose");

const MONGO_URL = process.env.MONGO_URL;

if (!MONGO_URL) {
    throw new Error("Please define the MONGO_URL environment variable.");
}

let cached = global.mongoose;

if (!cached) {
    cached = global.mongoose = { conn: null, promise: null };
}

async function dbConnect() {
    if (cached.conn) {
        console.log("Using already DB connect");
        return cached.conn;
    }

    if (!cached.promise) {
        const opts = {
            bufferCommands: false,
            useNewUrlParser: true,
            useUnifiedTopology: true,
        };

        cached.promise = mongoose
            .connect(MONGO_URL)
            .then((mongoose) => mongoose)
            .then(console.log("Connected DB"));
    }

    cached.conn = await cached.promise;
    return cached.conn;
}

export default dbConnect;
