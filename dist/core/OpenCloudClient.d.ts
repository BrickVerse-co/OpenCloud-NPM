import { Http } from '../util';
declare class OpenCloudClient {
    http: Http;
    apiKey: string;
    apiSecret: string;
    constructor(apiKey: string, apiSecret: string);
}
export default OpenCloudClient;
