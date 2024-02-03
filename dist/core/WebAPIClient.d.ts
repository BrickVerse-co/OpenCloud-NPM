import { Http } from '../util';
declare class WebAPIClient {
    http: Http;
    constructor();
    login(token: string, isbot: boolean): Promise<any>;
    quit(): Promise<any>;
    SendFriendRequest(userId: number): Promise<any>;
    GetFriends(userId: number): Promise<any>;
    GetSessionInfo(sesitive: Boolean): Promise<void | {
        success: boolean;
        data: any;
    }>;
    IsAuthenticated(): Promise<boolean | void>;
    GetAuthToken(): Promise<void | {
        success: boolean;
        data: any;
    }>;
    GetAvatarCustomizationByUserId(user_id: Number): Promise<void | {
        success: boolean;
        data: any;
    }>;
    GetPlayerByUserId(user_id: Number): Promise<void | {
        success: boolean;
        data: any;
    }>;
    GetPlayerByUsername(username: string): Promise<void | {
        success: boolean;
        data: any;
    }>;
    JoinGuild(guildId: number): Promise<boolean | void>;
}
export default WebAPIClient;
