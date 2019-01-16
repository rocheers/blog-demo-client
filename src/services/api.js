import axios from 'axios';

/**
 * A wrapper around axios API call that formats errors, etc
 * @param {string} method the HTTP verb you want to use
 * @param {string} path the route path / endpoint
 * @param {object} data (optional) data in JSON form for POST requests
 * @returns
 */
export function apiCall(method, path, data) {
    return new Promise((resolve, reject) => {
        console.log(path);
        return axios[method.toLowerCase()](path, data)
            .then(res => resolve(res.data))
            .catch(err => reject(err.response.data.error));
    });
}

export function setTokenHeader(token) {
    if (token) {
        axios.defaults.headers.common['Authorization'] = token;
    } else {
        delete axios.defaults.headers.common['Authorization'];
    }
}
