import { Http, err } from '../util'

class Client {
    http: Http;
    constructor() {
        this.http = new Http();
    }

    async login(token: string) {
        return await this.http.setToken(token)
            .then((response) => { return response; })
            .catch((error) => err(error))
            ;
    }

    async SendFriendRequest(userId: number) {
        if (!Number(userId)) { throw new Error("Invalid userId"); }
        let currentToken = this.http.getToken();

        return await this.http.request('POST', `https://api.brickverse.co/v1/user/friend/`, {
            token: currentToken,
            target: userId
        }).then((response) => { return response; }).catch((error) => err(error));
    }

    async GetFriends(userId: number) {
        if (!Number(userId)) { throw new Error("Invalid userId"); }
        let currentToken = this.http.getToken();

        return await this.http.request('POST', `https://api.brickverse.co/v1/user/friends/`, {
            token: currentToken,
            target: userId
        }).then((response) => { return response; }).catch((error) => err(error));
    }
}

export default Client;