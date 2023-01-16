import axios, { AxiosResponse } from 'axios';
import { RowCountResponse } from '../types/ServerResponses';

class BaseService {
    private readonly url: string;

    constructor(url: string) {
        this.url = url;
    }

    get(params: any, linkExtension?: string) {
        return axios.get(this.url + (linkExtension ? linkExtension : ''), {
            params: params
        });
    }

    getById(id: number | string) {
        return axios.get(this.url + id);
    }

    getRowCount(): Promise<AxiosResponse<RowCountResponse>> {
        return axios.get(this.url + 'rowCount');
    }
}

export default BaseService;
