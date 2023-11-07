import WebAPIClient from './WebAPIClient';
declare class ThumbnailClient extends WebAPIClient {
    GetAssetThumbnail(assetId: number): Promise<any>;
    GetUserThumbnail(userId: number, type: string): Promise<any>;
}
export default ThumbnailClient;
