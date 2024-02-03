import WebAPIClient from './WebAPIClient';
declare class WorldClient extends WebAPIClient {
    ShutdownUniverse(universeId: String, universeToken: String): Promise<any>;
    ShutdownWorldServer(serverId: number, universeId: String, universeToken: String): Promise<any>;
    CreateUniverse(ownerId: number, ownerType?: string): Promise<any>;
    CreateWorld(universeId: String): Promise<any>;
    GetWorldTree(worldId: String): Promise<any>;
}
export default WorldClient;
