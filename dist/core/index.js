"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ThumbnailClient = exports.OpenCloudClient = exports.WebAPIClient = void 0;
const WebAPIClient_1 = __importDefault(require("./WebAPIClient"));
exports.WebAPIClient = WebAPIClient_1.default;
const OpenCloudClient_1 = __importDefault(require("./OpenCloudClient"));
exports.OpenCloudClient = OpenCloudClient_1.default;
const ThumbnailClient_1 = __importDefault(require("./ThumbnailClient"));
exports.ThumbnailClient = ThumbnailClient_1.default;
