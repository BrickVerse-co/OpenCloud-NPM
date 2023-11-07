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
class ThumbnailClient extends WebAPIClient_1.default {
    GetAssetThumbnail(assetId) {
        return __awaiter(this, void 0, void 0, function* () {
            if (!Number(assetId))
                throw new Error("Invalid userId");
            return yield this.http.request('GET', `https://api.brickverse.gg/v2/thumbnail/asset/${assetId}`, {}).then((response) => { return response; }).catch((error) => (0, util_1.err)(error));
        });
    }
    GetUserThumbnail(userId, type) {
        return __awaiter(this, void 0, void 0, function* () {
            const valid_thumb_types = ["player_head", "player_body"];
            if (!Number(userId))
                throw new Error("Invalid userId");
            if (valid_thumb_types[type] == null)
                throw new Error("Invalid ThumbnailType");
            return yield this.http.request('GET', `https://api.brickverse.gg/v2/thumbnail/user/${userId}/${type}`, {}).then((response) => { return response; }).catch((error) => (0, util_1.err)(error));
        });
    }
}
exports.default = ThumbnailClient;
