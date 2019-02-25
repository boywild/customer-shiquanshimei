import axios from 'axios';
// import { buildConfig } from 'app/config/buildConfig';
import httpUrl from 'app/config/httpConfig';

const defaultHeader = {
    Accept: 'application/json',
    'Content-Type': 'application/json'
};

const instance = axios.create({
    // baseURL: buildConfig.apiDomain,
    baseURL: httpUrl,
    timeout: 5000,
    headers: defaultHeader,
    withCredentials: false
});

const returnJson = (response) => response.data;

const standardResponse = (response) => {
    if (response.status < 400) {
        return returnJson(response);
    }
    return Promise.reject(returnJson(response));
};

const api = () => {
    let opt = {
        instance
    };

    return {
        setOptions: (options) => {
            opt = {
                ...opt,
                ...options
            };
        },
        get: (url, query, options) =>
            opt.instance
                .get(url, {
                    params: query,
                    ...options
                })
                .then(standardResponse)
                .catch(function(error) {
                    console.log(error);
                }),
        post: (url, data, options) =>
            opt.instance
                .post(url, data)
                .then(standardResponse)
                .catch(function(error) {
                    console.log(error);
                }),
        all: (url) => {
            if (typeof url !== 'array') return new Error('Type error:url must be Array');
            opt.instance.all([...url]).then(
                opt.instance.spread(function(acct, perms) {
                    // 两个请求现在都执行完成
                })
            );
        },
        delete: (url) => opt.instance.delete(url).then(standardResponse)
    };
};

export default api();
