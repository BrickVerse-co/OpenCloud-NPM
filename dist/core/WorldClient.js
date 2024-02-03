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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const util_1 = require("../util");
const WebAPIClient_1 = __importDefault(require("./WebAPIClient"));
class WorldClient extends WebAPIClient_1.default {
    ShutdownUniverse(universeId, universeToken) {
        return __awaiter(this, void 0, void 0, function* () {
            if (!this.http.isAuthenticated())
                throw new Error("A account must been authenticated.");
            if (!String(universeId))
                throw new Error("Invalid universeId");
            if (!String(universeToken))
                throw new Error("Invalid universeToken");
            return yield this.http.request('POST', `https://api.brickverse.gg/v2/world/${universeId}/shutdown/all/${universeToken}`, {}).then((response) => { return response; }).catch((error) => (0, util_1.err)(error));
        });
    }
    ShutdownWorldServer(serverId, universeId, universeToken) {
        return __awaiter(this, void 0, void 0, function* () {
            if (!this.http.isAuthenticated())
                throw new Error("A account must been authenticated.");
            if (!Number(serverId))
                throw new Error("Invalid serverId");
            if (!String(universeId))
                throw new Error("Invalid universeId");
            if (!String(universeToken))
                throw new Error("Invalid universeToken");
            return yield this.http.request('POST', `https://api.brickverse.gg/v2/world/${universeId}/shutdown/server/${serverId}/${universeToken}`, {}).then((response) => { return response; }).catch((error) => (0, util_1.err)(error));
        });
    }
    CreateUniverse(ownerId, ownerType = "USER") {
        return __awaiter(this, void 0, void 0, function* () {
            if (!this.http.isAuthenticated())
                throw new Error("A account must been authenticated.");
            if (!Number(ownerId))
                throw new Error("Invalid ownerId");
            if (ownerType != "USER" && ownerType != "GUILD")
                throw new Error("Invalid ownerType");
            return yield this.http.request('POST', `https://api.brickverse.gg/v2/world/create-universe/${ownerId}/${ownerType}`, {}).then((response) => { return response; }).catch((error) => (0, util_1.err)(error));
        });
    }
    CreateWorld(universeId) {
        return __awaiter(this, void 0, void 0, function* () {
            if (!this.http.isAuthenticated())
                throw new Error("A account must been authenticated.");
            if (!String(universeId))
                throw new Error("Invalid universeId");
            return yield this.http.request('POST', `https://api.brickverse.gg/v2/world/create-world/${universeId}`, {}).then((response) => { return response; }).catch((error) => (0, util_1.err)(error));
        });
    }
    GetWorldTree(worldId) {
        return __awaiter(this, void 0, void 0, function* () {
            if (!String(worldId))
                throw new Error("Invalid worldId");
            return yield this.http.request('GET', `https://api.brickverse.gg/v2/world/worldtree/${worldId}`, {}).then((response) => { return response; }).catch((error) => (0, util_1.err)(error));
        });
    }
}
exports.default = WorldClient;
