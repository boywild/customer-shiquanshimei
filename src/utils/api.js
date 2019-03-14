import axios from 'axios';
import _ from 'lodash';

// import { buildConfig } from 'app/config/buildConfig';
// import httpConfig from 'app/config/httpConfig';

const defaultHeader = {
    Accept: 'application/json',
    'Content-Type': 'application/json'
};

const instance = axios.create({
    // baseURL: buildConfig.apiDomain,
    // baseURL: httpConfig.apiUrl,
    timeout: 5000,
    headers: defaultHeader,
    withCredentials: false
});

const returnJson = (response) => response.data;

const standardResponse = (response) => {
    if (response.status < 400 && response.data.resultCode === '000000') {
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
                .then(standardResponse),
        post: (url, data, options) =>
            opt.instance
                .post(
                    url,
                    {
                        ...data
                    },
                    {
                        ...options
                    }
                )
                .then(standardResponse),
        all: (url) => {
            if (!Array.isArray(url)) return new Error('Type error:url must be Array');
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
