import { Http } from '../util';
declare class Client {
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
    GetPlayerByUsername(username: string): Promise<void | {
        status: boolean;
        data: any;
    }>;
    JoinGuild(guildId: number): Promise<boolean | void>;
}
export default Client;
