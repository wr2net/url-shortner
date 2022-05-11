require('dotenv').config();

import express, {Request, Response} from 'express';
import { URLController } from './controller/URLController'
import { MongoConnection } from './database/MongoConnection'

const api = express();

api.use(express.json());

const database = new MongoConnection();
database.connect();

const urlController = new URLController();

api.get('/status', (req: Request, res: Response) => {
    res.json({
        status: 200,
        message: 'It`s working!!',
    })
});

api.get('/', urlController.start);
api.post('/shorten', urlController.shorten);
api.get('/:hash', urlController.redirect);

api.listen(5000, () => console.log('Server started'));

api.use('/.netlify/funcions/api', api);
module.exports.handler = serverless(api);
