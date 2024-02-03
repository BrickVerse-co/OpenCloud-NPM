import { Http, err } from '../util';
import WebAPIClient from './WebAPIClient';

class WorldClient extends WebAPIClient {
    async ShutdownUniverse(universeId: String, universeToken: String) {
        if (!this.http.isAuthenticated()) throw new Error("A account must been authenticated.");
        if (!String(universeId)) throw new Error("Invalid universeId");
        if (!String(universeToken)) throw new Error("Invalid universeToken");

        return await this.http.request('POST', `https://api.brickverse.gg/v2/world/${universeId}/shutdown/all/${universeToken}`, {}).then((response) => { return response; }).catch((error) => err(error));
    }

    async ShutdownWorldServer(serverId: number, universeId: String, universeToken: String) {
        if (!this.http.isAuthenticated()) throw new Error("A account must been authenticated.");

        if (!Number(serverId)) throw new Error("Invalid serverId");
        if (!String(universeId)) throw new Error("Invalid universeId");
        if (!String(universeToken)) throw new Error("Invalid universeToken");

        return await this.http.request('POST', `https://api.brickverse.gg/v2/world/${universeId}/shutdown/server/${serverId}/${universeToken}`, {}).then((response) => { return response; }).catch((error) => err(error));
    }

    async CreateUniverse(ownerId: number, ownerType: string = "USER") {
        if (!this.http.isAuthenticated()) throw new Error("A account must been authenticated.");
        if (!Number(ownerId)) throw new Error("Invalid ownerId");
        if (ownerType != "USER" && ownerType != "GUILD") throw new Error("Invalid ownerType");

        return await this.http.request('POST', `https://api.brickverse.gg/v2/world/create-universe/${ownerId}/${ownerType}`, {}).then((response) => { return response; }).catch((error) => err(error));
    }

    async CreateWorld(universeId: String) {
        if (!this.http.isAuthenticated()) throw new Error("A account must been authenticated.");
        if (!String(universeId)) throw new Error("Invalid universeId");

        return await this.http.request('POST', `https://api.brickverse.gg/v2/world/create-world/${universeId}`, {}).then((response) => { return response; }).catch((error) => err(error));
    }

    async GetWorldTree(worldId: String) {
        if (!String(worldId)) throw new Error("Invalid worldId");

        return await this.http.request('GET', `https://api.brickverse.gg/v2/world/worldtree/${worldId}`, {}).then((response) => { return response; }).catch((error) => err(error));
    }
}

export default WorldClient;