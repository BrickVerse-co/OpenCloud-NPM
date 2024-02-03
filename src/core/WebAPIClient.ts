import { Http, err } from '../util'

class WebAPIClient {
    http: Http;

    constructor() {
        this.http = new Http();
    }

    // SESSION
    async login(token: string, isbot: boolean) {
        return await this.http.setToken(token, isbot).then((response) => { return response; }).catch((error) => err(error)) ;
    }

    async quit() {
        // terminate session
        this.http.setToken("terminate", false);
        return await this.http.request('GET', `https://api.brickverse.gg/v2/auth/logout`, {}).then((response) => { return response; }).catch((error) => err(error));
    }

    // FRIENDS
    async SendFriendRequest(userId: number) {
        if (!Number(userId)) { throw new Error("Invalid userId"); }
        let currentToken = this.http.getToken();

        return await this.http.request('POST', `https://api.brickverse.gg/v1/user/friend/`, {
            token: currentToken,
            target: userId
        }).then((response) => { return response; }).catch((error) => err(error));
    }

    async GetFriends(userId: number) {
        if (!Number(userId)) { throw new Error("Invalid userId"); }
        let currentToken = this.http.getToken();

        return await this.http.request('POST', `https://api.brickverse.gg/v1/user/friends/`, {
            token: currentToken,
            target: userId
        }).then((response) => { return response; }).catch((error) => err(error));
    }

    // Auth
    async GetSessionInfo(sesitive: Boolean) {
        var sesitive_query = "";
        if (sesitive == undefined) sesitive = false;
        if (sesitive) sesitive_query = "?sesitive";

        return await this.http.request('GET', `https://api.brickverse.gg/v2/auth/session${sesitive_query}`, {}).then((response) => {
            return {
                success: response.status == "ok",
                data: response.status == "ok" ? response : response.message
            };
        }).catch((error) => err(error));
    }

    async IsAuthenticated() {
        return await this.http.request('GET', `https://api.brickverse.gg/v2/auth/is-authed/`, {}).then((response) => {
            return response.status == "ok";
        }).catch((error) => err(error));
    }

    async GetAuthToken() {
        return await this.http.request('GET', `https://api.brickverse.gg/v2/auth/get-token/`, {}).then((response) => {
            return {
                success: response.status == "ok",
                data: response.status == "ok" ? response.token : response.message
            };
        }).catch((error) => err(error));
    }

    // User
    async GetAvatarCustomizationByUserId(user_id: Number) {
        if (!Number(user_id)) { throw new Error("Invalid user_id"); }

        return await this.http.request('GET', `https://api.brickverse.gg/v2/user/id/${user_id}/`, {}).then((response) => {
            return {
                success: response.status == "ok",
                data: response.status == "ok" ? response.avatar_data : response.message
            };
        }).catch((error) => err(error));
    }

    async GetPlayerByUserId(user_id: Number) {
        if (!Number(user_id)) { throw new Error("Invalid user_id"); }

        return await this.http.request('GET', `https://api.brickverse.gg/v2/user/id/${user_id}/`, {}).then((response) => {
            return {
                success: response.status == "ok",
                data: response.status == "ok" ? response.user_data : response.message
            };
        }).catch((error) => err(error));
    }

    async GetPlayerByUsername(username: string) {
        if (!String(username)) { throw new Error("Invalid username"); }

        return await this.http.request('GET', `https://api.brickverse.gg/v2/user/username/${username}/`, {}).then((response) => {
            return {
                success: response.status == "ok",
                data: response.status == "ok" ? response.user_data : response.message
            };
        }).catch((error) => err(error));
    }

    // Guilds
    async JoinGuild(guildId: number) {
        if (!Number(guildId)) { throw new Error("Invalid guildId"); }

        return await this.http.request('POST', `https://api.brickverse.gg/v1/guild/join?id=${guildId}/`, {}).then((response) => {
            return true
        }).catch((error) => err(error));
    }
}

export default WebAPIClient;