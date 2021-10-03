require('dotenv').config();

type ConfigTypes = {
    port: number | string;
    dbUri: string
}
const config: ConfigTypes = {
    port: process.env.PORT || 8088,
    dbUri: process.env.DB_URI || "mongodb://localhost/app-starter"
}

export default config;