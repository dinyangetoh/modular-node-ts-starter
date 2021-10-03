import express from 'express'
import homeRoutes from "../routes/home.routes";

const routes: express.Router[] = [
    homeRoutes
];


export default routes;