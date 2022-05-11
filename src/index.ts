require('dotenv').config();

import express, {Request, Response} from 'express';
import { URLController } from './controller/URLController'
import { MongoConnection } from './database/MongoConnection'

const api = express();
const router = express.Router();

api.use(express.json());

const database = new MongoConnection();
database.connect();

const urlController = new URLController();

router.get('/status', (req: Request, res: Response) => {
    res.json({
        status: 200,
        message: 'It`s working!!',
    })
});

router.get('/', urlController.start);
router.post('/shorten', urlController.shorten);
router.get('/:hash', urlController.redirect);

api.listen(5000, () => console.log('Server started'));

api.use('/.netlify/funcions/api', router);
module.exports.handler = serverless(api);
