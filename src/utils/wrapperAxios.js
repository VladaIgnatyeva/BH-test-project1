import axios from 'axios';
//const api = 'http://itstrana.vh118.hosterby.com/start_up/api/startap/startap'
const api = 'http://itstrana.vh118.hosterby.com/teleworking/api/lending/'
export default class WrapperAxios {

    post(url, data) {
        return axios.post(`${api}/${url}`, data);
    }

    put(url, data) {
        return axios.put(`${api}/${url}`, data)
    }

    get(url) {   
        return axios.get(`${api}/${url}`);
    }
}