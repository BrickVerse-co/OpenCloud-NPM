import { Http, err } from '../util'
import express from 'express';

class OpenCloudClient {
    public http: Http;
    public apiKey: string;
    public apiSecret: string;

    constructor(apiKey: string, apiSecret: string) {
        this.apiKey = apiKey;
        this.apiSecret = apiSecret;
        this.http = new Http();
    }
}

class Database extends OpenCloudClient {
    async SetAsync(WorldId: number, Key: string, Value: JSON) {
        return await this.http.request('POST', `https://api.brickverse.gg/v2/cloud/database/set`, {
            apiKey: this.apiKey,
            apiSecret: this.apiSecret,
            WorldId: WorldId,
            Key: Key,
            Value: Value
        }).then((response) => { return response; }).catch((error) => err(error));
    }

    async GetAsync(WorldId: number, Key: string) {
        return await this.http.request('GET', `https://api.brickverse.gg/v2/cloud/database/get`, {
            apiKey: this.apiKey,
            apiSecret: this.apiSecret,
            WorldId: WorldId,
            Key: Key
        }).then((response) => { return response; }).catch((error) => err(error));
    }
}

class Webhooks extends OpenCloudClient {
    app: express.Express;
    Webhooks: Map<string, Function[]>;

    on(event: string, eventHandler: Function) {
        if (!this.Webhooks.has(event)) {
            this.Webhooks.set(event, []);
        }

        this.Webhooks.get(event).push(eventHandler);
    }

    private routes() {
        this.app.get('/bvnpm/webhook', (req, res) => {
            if (req.body.apiSecret !== this.apiSecret) {
                return res.status(403).send('Unauthorized'); // Send a proper unauthorized response
            }

            const event = req.body.Event;
            let processed = 0;

            if (event && this.Webhooks.has(event)) {
                const handlers = this.Webhooks.get(event);

                for (const handler of handlers) {
                    processed += 1;
                    handler(req.body);
                }
            }

            res.send({ success: processed > 0, processed: processed });
        });
    }

    listen(port: number) {
        if (port === undefined) port = 80;

        this.app = express();
        this.Webhooks = new Map();
        this.routes();

        this.app.listen(port, () => {
            console.log(`OpenCloudClient server is listening on port ${port}`);
        });
    }
}

export default OpenCloudClient;