import mongoose from 'mongoose';
import config from "../config/db";


class Database {
    constructor() {
        this.connection = mongoose.connect(config.url, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        })
            .then(() => console.log('Connected to db!'))
            .catch((err) =>
                console.log(
                    `Could not connect to db!!! ${process.env.DB_CONNECTION}`,
                    err
                )
            );
    }
}


export default new Database();

