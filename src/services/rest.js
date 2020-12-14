import axios from "axios";

export const get = ({ url, headers = {}, params = {} }) =>
  axios.request({ method: "get", url, headers, params });
export const post = ({ url, data, headers = {}, params = {} }) =>
  axios.request({ method: "post", url, data, headers, params });
export const put = ({ url, data, headers = {}, params = {} }) =>
  axios.request({ method: "put", url, data, headers, params });
export const del = ({ url, headers = {}, params = {} }) =>
  axios.request({ method: "delete", url, headers, params });
