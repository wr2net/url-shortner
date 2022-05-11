import {Request, Response} from 'express';
import shortId from "shortid";
import { config } from '../config/Constants'
import { URLModel } from '../database/model/URL'

export class URLController {
    public async shorten(req: Request, res: Response): Promise<void> {
        const { originURL } = req.body
        const url = await URLModel.findOne({ originURL })
        if (url) {
            res.json(url)
            return
        }
        const hash = shortId.generate()
        const shortURL = `${config.API_URL}/${hash}`
        const newURL = await URLModel.create({ hash, shortURL, originURL })
        res.json(newURL)
    }

    public async redirect(req: Request, res: Response): Promise<void> {
        const { hash } = req.params
        const url = await URLModel.findOne({ hash })

        if (url) {
            res.redirect(url.originURL)
            return
        }

        res.status(400).json({ error: 'URL not found' })
    }

    public async start(req: Request, res: Response): Promise<void> {
        res.status(200).json({ access: 'https://github.com/wr2net/url-shortner' })
    }

    public async status(req: Request, res: Response): Promise<void> {
        res.status(200).json({
            status: 200,
            message: 'It`s working!!',
        })
    }
}
