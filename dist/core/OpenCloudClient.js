"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const util_1 = require("../util");
const express_1 = __importDefault(require("express"));
class OpenCloudClient {
    constructor(apiKey, apiSecret) {
        this.apiKey = apiKey;
        this.apiSecret = apiSecret;
        this.http = new util_1.Http();
    }
}
class Database extends OpenCloudClient {
    SetAsync(WorldId, Key, Value) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.http.request('POST', `https://api.brickverse.gg/v2/cloud/database/set`, {
                apiKey: this.apiKey,
                apiSecret: this.apiSecret,
                worldId: WorldId,
                dataKey: Key,
                dataValue: Value
            }).then((response) => { return response; }).catch((error) => (0, util_1.err)(error));
        });
    }
    GetAsync(WorldId, Key) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.http.request('GET', `https://api.brickverse.gg/v2/cloud/database/get`, {
                apiKey: this.apiKey,
                apiSecret: this.apiSecret,
                worldId: WorldId,
                dataKey: Key
            }).then((response) => { return response; }).catch((error) => (0, util_1.err)(error));
        });
    }
}
class Webhooks extends OpenCloudClient {
    on(event, eventHandler) {
        if (!this.Webhooks.has(event)) {
            this.Webhooks.set(event, []);
        }
        this.Webhooks.get(event).push(eventHandler);
    }
    routes() {
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
    listen(port) {
        if (port === undefined)
            port = 80;
        this.app = (0, express_1.default)();
        this.Webhooks = new Map();
        this.routes();
        this.server = this.app.listen(port, () => {
            const url = `http://${this.server.address().address}:${port}/bvnpm/webhook`;
            console.log(`OpenCloudClient server is listening on port ${port}. Live URL: ${url}`);
        });
    }
}
exports.default = OpenCloudClient;
