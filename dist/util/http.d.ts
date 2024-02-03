declare class Http {
    #private;
    constructor();
    getToken(): Promise<string>;
    isAuthenticated(): Promise<boolean>;
    setToken(token: string, isbot: boolean): Promise<any>;
    get(url: any, callback?: (arg0: any) => any): Promise<any>;
    request(verb: any, url: any, payload: any, withHeaders?: boolean, callback?: (arg0: any) => any): Promise<any>;
    delete(url: any, callback?: (arg0: any) => any): Promise<any>;
}
export { Http };
