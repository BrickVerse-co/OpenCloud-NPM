import axios, { AxiosResponse } from 'axios'

class Http {
    #token: string;

    constructor() {
        this.#token = undefined;
    }

    async getToken() {
        if (this.#token) {
            return this.#token;
        } else {
            throw new Error('No token set'); 
        }
    }

    async setToken(token: string) {
        if (!token || !token.includes("WARNING")) {
            throw new Error("Invalid token provided: Please include full warning!");
        }

        let response = await axios({
            method: `GET`,
            url: `https://auth.brickverse.co?action=set`,
            headers: {
                cookie: `.BRICKVERSE_SECURITY_TOKEN=${token}`
            }
        });

        if (response.data['UserID']) {
            this.#token = token;
            return response.data;
        } else {
            throw new Error('Invalid token provided');
        }
    }

    async get(url: any, callback?: (arg0: any) => any) {
        if (!this.#token) { return new Error('No token set'); }

        let response = await axios({
            method: `GET`,
            url: url,
            headers: {
                cookie: `.BRICKVERSE_SECURITY_TOKEN=${this.#token};`
            }
        });

        if (callback) {
            return await callback(response.data);
        } else {
            return response.data;
        }
    }

    async request(verb: any, url: any, payload: any, withHeaders?: boolean, callback?: (arg0: any) => any) {
        if (!this.#token) { return new Error('No token set'); }

        let response: AxiosResponse<any, any>;

        let response1 = await axios({
            method: verb,
            url: `https://auth.brickverse.co`,
            headers: {
                Cookie: `.BRICKVERSE_SECURITY_TOKEN=${this.#token};`,
                "x-csrf-token": "",
            }
        })
            .catch(async (err) => {
                let header = err.response.headers['x-csrf-token'];
                response = await axios({
                    method: verb,
                    url: url,
                    headers: {
                        Cookie: `.BRICKVERSE_SECURITY_TOKEN=${this.#token};`,
                        "x-csrf-token": header || "",
                    },
                    data: payload
                });
            })

        if (callback) {
            return await callback(response.data);
        } else {
            if (withHeaders) {
                return { data: response.data, headers: response.headers };
            } else {
                return response.data;
            }
        }
    }
    async delete(url: any, callback?: (arg0: any) => any) {
        if (!this.#token) { return new Error('No token set'); }

        let response = await axios({
            method: `DELETE`,
            url: url,
            headers: {
                cookie: `.BRICKVERSE_SECURITY_TOKEN=${this.#token};`
            }
        });

        if (callback) {
            return await callback(response.data);
        } else {
            return response.data;
        }
    }
}

export { Http };