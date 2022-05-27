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
exports.err = exports.populateQuery = exports.octokit = void 0;
const axios_1 = __importDefault(require("axios"));
function octokit(schema, params, misc = {
    method: 'GET',
    headers: {}
}) {
    return __awaiter(this, void 0, void 0, function* () {
        for (const [k, v] of Object.entries(params)) {
            if (schema.includes(`{${k}}`)) {
                schema = schema.replaceAll(`{${k}}`, v);
            }
        }
        try {
            let response;
            if (misc.method.match(/GET|DELETE/)) {
                response = yield (0, axios_1.default)({
                    url: schema,
                    method: misc.method,
                    headers: misc.headers,
                });
            }
            else {
                response = yield (0, axios_1.default)({
                    url: schema,
                    method: misc.method,
                    headers: misc.headers,
                    data: misc.body
                });
            }
            return response;
        }
        catch (e) {
            throw e;
        }
    });
}
exports.octokit = octokit;
function populateQuery(list) {
    let query = '';
    for (const [k, v] of Object.entries(list)) {
        if (v !== null && v !== undefined) {
            query += `${query.length === 0 ? '?' : '&'}${k.toString()}=${v.toString()}`;
        }
    }
    return query;
}
exports.populateQuery = populateQuery;
function err(obj) {
    obj = obj.toJSON();
    console.error(obj.stack);
    console.error("Config", obj.config);
}
exports.err = err;
