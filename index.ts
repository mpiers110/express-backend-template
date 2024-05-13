import express, { Express, NextFunction, Request, Response } from 'express';
import bodyParser from 'body-parser';

import HttpError from './models/http-error';
import mainRouter from './routes';
import mongoose from 'mongoose';
import { MONGO_URL, PORT } from './utils/config';

const app: Express = express();

app.use(bodyParser.json());

app.use((req: Request, res: Response, next: NextFunction) => {
    res.setHeader("Access-Control-Allow-Origin", '*')
    res.setHeader("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
    res.setHeader("Access-Control-Allow-Methods", "GET, POST, PATCH, PUT, DELETE");
    next();
});

app.use(mainRouter);

app.use((req, res, next) => {
    throw new HttpError('The page you are looking for could not be found', 'The page you are looking for could not be found', 404)
});

app.use((error: any, req: Request, res: Response, next: NextFunction) => {
    res.status(error.code || 500);
    res.json({ message: error.message || 'An unknown error has occured', content: error.content || null })
});

mongoose.set('strictQuery', false).connect(MONGO_URL as string).then(() => {
    app.listen(PORT, () => {
        console.log(`Listening on port ${PORT}`)
    })
}).catch((err) => {
    console.log(err);
})