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
var __classPrivateFieldSet = (this && this.__classPrivateFieldSet) || function (receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
};
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var _Http_token;
Object.defineProperty(exports, "__esModule", { value: true });
exports.Http = void 0;
const axios_1 = __importDefault(require("axios"));
class Http {
    constructor() {
        _Http_token.set(this, void 0);
        __classPrivateFieldSet(this, _Http_token, undefined, "f");
    }
    getToken() {
        return __awaiter(this, void 0, void 0, function* () {
            if (__classPrivateFieldGet(this, _Http_token, "f")) {
                return __classPrivateFieldGet(this, _Http_token, "f");
            }
            else {
                throw new Error('No token set');
            }
        });
    }
    isAuthenticated() {
        return __awaiter(this, void 0, void 0, function* () {
            if (__classPrivateFieldGet(this, _Http_token, "f"))
                return true;
            return false;
        });
    }
    setToken(token, isbot) {
        return __awaiter(this, void 0, void 0, function* () {
            if (!token || !token.includes("WARNING") && !token.includes("terminate")) {
                throw new Error("Invalid token provided: Please include full warning!");
            }
            if (token.includes("terminate")) {
                __classPrivateFieldSet(this, _Http_token, "", "f");
            }
            else {
                const config = {
                    method: `GET`,
                    url: `https://api.brickverse.gg/v2/auth/set`,
                    data: {
                        bot: isbot,
                        token: token
                    },
                    headers: {
                        cookie: `.BRICKVERSE_SECURITY_TOKEN=${token}`
                    },
                };
                let response = yield (0, axios_1.default)(config);
                if (response.data['logged_in']) {
                    __classPrivateFieldSet(this, _Http_token, token, "f");
                    return response.data;
                }
                else {
                    throw new Error('Invalid token provided');
                }
            }
        });
    }
    get(url, callback) {
        return __awaiter(this, void 0, void 0, function* () {
            if (!__classPrivateFieldGet(this, _Http_token, "f")) {
                return new Error('No token set');
            }
            let response = yield (0, axios_1.default)({
                method: `GET`,
                url: url,
                headers: {
                    cookie: `.BRICKVERSE_SECURITY_TOKEN=${__classPrivateFieldGet(this, _Http_token, "f")};`
                }
            });
            if (callback) {
                return yield callback(response.data);
            }
            else {
                return response.data;
            }
        });
    }
    request(verb, url, payload, withHeaders, callback) {
        return __awaiter(this, void 0, void 0, function* () {
            if (!__classPrivateFieldGet(this, _Http_token, "f")) {
                return new Error('No token set');
            }
            let response;
            let response1 = yield (0, axios_1.default)({
                method: verb,
                url: `https://auth.brickverse.gg`,
                headers: {
                    Cookie: `.BRICKVERSE_SECURITY_TOKEN=${__classPrivateFieldGet(this, _Http_token, "f")};`,
                    "x-csrf-token": "",
                }
            })
                .catch((err) => __awaiter(this, void 0, void 0, function* () {
                let header = err.response.headers['x-csrf-token'];
                response = yield (0, axios_1.default)({
                    method: verb,
                    url: url,
                    headers: {
                        Cookie: `.BRICKVERSE_SECURITY_TOKEN=${__classPrivateFieldGet(this, _Http_token, "f")};`,
                        "x-csrf-token": header || "",
                    },
                    data: payload
                });
            }));
            if (callback) {
                return yield callback(response.data);
            }
            else {
                if (withHeaders) {
                    return { data: response.data, headers: response.headers };
                }
                else {
                    return response.data;
                }
            }
        });
    }
    delete(url, callback) {
        return __awaiter(this, void 0, void 0, function* () {
            if (!__classPrivateFieldGet(this, _Http_token, "f")) {
                return new Error('No token set');
            }
            let response = yield (0, axios_1.default)({
                method: `DELETE`,
                url: url,
                headers: {
                    cookie: `.BRICKVERSE_SECURITY_TOKEN=${__classPrivateFieldGet(this, _Http_token, "f")};`
                }
            });
            if (callback) {
                return yield callback(response.data);
            }
            else {
                return response.data;
            }
        });
    }
}
exports.Http = Http;
_Http_token = new WeakMap();
