import axios from 'axios';

class BaseService {
    private readonly url: string;

    constructor(url: string) {
        this.url = url;
    }

    get(params: any) {
        return axios.get(this.url, {
            params: params
        });
    }

    getById(id: number | string) {
        return axios.get(this.url + id);
    }

    getRowCount() {
        return axios.get(this.url + 'rowCount');
    }
}

export default BaseService;
