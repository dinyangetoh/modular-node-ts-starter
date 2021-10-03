import {App} from "./app";
import config from "./app/config";


const app = new App(
    +config.port,
);


app.connectDB(config.dbUri);

app.listen();