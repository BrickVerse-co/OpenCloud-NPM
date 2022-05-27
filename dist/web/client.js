"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const util_1 = require("../util");
class Client {
    constructor() {
        this.http = new util_1.Http();
    }
    // SESSION
    login(token, isbot) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.http.setToken(token, isbot)
                .then((response) => { return response; })
                .catch((error) => (0, util_1.err)(error));
        });
    }
    quit() {
        return __awaiter(this, void 0, void 0, function* () {
            // terminate session
            this.http.setToken("terminate", false);
            return yield this.http.request('POST', `https://auth.brickverse.co?action=terminate`, {}).then((response) => { return response; }).catch((error) => (0, util_1.err)(error));
        });
    }
    // FRIENDS
    SendFriendRequest(userId) {
        return __awaiter(this, void 0, void 0, function* () {
            if (!Number(userId)) {
                throw new Error("Invalid userId");
            }
            let currentToken = this.http.getToken();
            return yield this.http.request('POST', `https://api.brickverse.co/v1/user/friend/`, {
                token: currentToken,
                target: userId
            }).then((response) => { return response; }).catch((error) => (0, util_1.err)(error));
        });
    }
    GetFriends(userId) {
        return __awaiter(this, void 0, void 0, function* () {
            if (!Number(userId)) {
                throw new Error("Invalid userId");
            }
            let currentToken = this.http.getToken();
            return yield this.http.request('POST', `https://api.brickverse.co/v1/user/friends/`, {
                token: currentToken,
                target: userId
            }).then((response) => { return response; }).catch((error) => (0, util_1.err)(error));
        });
    }
    GetAvatar(userId, thumbnail_type) {
        return __awaiter(this, void 0, void 0, function* () {
            const types = ["player_head", "player_body"];
            if (!Number(userId)) {
                throw new Error("Invalid userId");
            }
            if (!types.includes(thumbnail_type)) {
                throw new Error("Invalid thumbnail type");
            }
            let currentToken = this.http.getToken();
            return yield this.http.request('POST', `https://api.brickverse.co/v1/user/avatar/`, {
                token: currentToken,
                id: userId
            }).then((response) => {
                if (response.status == "success") {
                    return {
                        status: true,
                        avatar: response.avatar
                    };
                }
                else {
                    return {
                        status: false,
                        avatar: response.reason
                    };
                }
            }).catch((error) => (0, util_1.err)(error));
        });
    }
    GetPlayerByUsername(username) {
        return __awaiter(this, void 0, void 0, function* () {
            if (!String(username)) {
                throw new Error("Invalid username");
            }
            return yield this.http.request('POST', `https://api.brickverse.co/v1/user/get-by-username?username=${username}/`, {}).then((response) => {
                if (response.status == "success") {
                    return {
                        status: true,
                        data: response
                    };
                }
                else {
                    return {
                        status: false,
                        data: response.reason
                    };
                }
            }).catch((error) => (0, util_1.err)(error));
        });
    }
    JoinGuild(guildId) {
        return __awaiter(this, void 0, void 0, function* () {
            if (!Number(guildId)) {
                throw new Error("Invalid guildId");
            }
            return yield this.http.request('POST', `https://api.brickverse.co/v1/guild/join?id=${guildId}/`, {}).then((response) => {
                return true;
            }).catch((error) => (0, util_1.err)(error));
        });
    }
}
exports.default = Client;
