import {App} from "./app";


const app = new App(
    9000,
    [],
);

const dbUri = process.env.DB_URI || "'mongodb://localhost/app-starter";

app.connectDB(dbUri);

app.listen();