import { AxiosResponse } from 'axios';
import { OctokitMiscellaneousParams } from './';
declare function octokit(schema: string, params: any, misc?: OctokitMiscellaneousParams): Promise<AxiosResponse<any, any>>;
declare function populateQuery(list: any): string;
declare function err(obj: any): void;
export { octokit, populateQuery, err };
