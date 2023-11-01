import { Http } from '../util';
declare class WebAPIClient {
    http: Http;
    constructor();
    login(token: string, isbot: boolean): Promise<any>;
    quit(): Promise<any>;
    SendFriendRequest(userId: number): Promise<any>;
    GetFriends(userId: number): Promise<any>;
    GetAvatar(userId: number, thumbnail_type: string): Promise<void | {
        status: boolean;
        avatar: any;
    }>;
    GetSessionInfo(sesitive: Boolean): Promise<void | {
        status: boolean;
        data: any;
    }>;
    IsAuthed(): Promise<boolean | void>;
    GetAuthToken(): Promise<void | {
        status: boolean;
        data: any;
    }>;
    GetPlayerByUserId(user_id: Number): Promise<void | {
        status: boolean;
        data: any;
    }>;
    GetPlayerByUsername(username: string): Promise<void | {
        status: boolean;
        data: any;
    }>;
    JoinGuild(guildId: number): Promise<boolean | void>;
}
export default WebAPIClient;
