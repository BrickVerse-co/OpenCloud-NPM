import { Http, err } from '../util';
import WebAPIClient from './WebAPIClient';

class ThumbnailClient extends WebAPIClient {
    async GetAssetThumbnail(assetId: number) {
        if (!Number(assetId)) throw new Error("Invalid userId");

        return await this.http.request('GET', `https://api.brickverse.gg/v2/thumbnail/asset/${assetId}`, {}
        ).then((response) => { return response; }).catch((error) => err(error));
    }

    async GetUserThumbnail(userId: number, type: string) {
        const valid_thumb_types = ["player_head", "player_body"];

        if (!Number(userId)) throw new Error("Invalid userId");
        if (valid_thumb_types[type] == null) throw new Error("Invalid ThumbnailType");

        return await this.http.request('GET', `https://api.brickverse.gg/v2/thumbnail/user/${userId}/${type}`, {}
        ).then((response) => { return response; }).catch((error) => err(error));
    }
}

export default ThumbnailClient;