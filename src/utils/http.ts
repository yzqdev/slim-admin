import qs from "qs";
import axios, { AxiosRequestConfig } from "axios";
import { useUserStore } from "@/store/user";

const instance = axios.create({
  baseURL: document.domain, //接口统一域名
  timeout: 60000, //设置超时
});

instance.defaults.withCredentials = true;
instance.interceptors.request.use(
  (config: AxiosRequestConfig) => {
    console.log("requestUrl==", config.url);
    let userStore = useUserStore();
    config.headers["version"] = "1.0";
    config.headers["Content-Type"] = "application/json;charset=UTF-8";
    if (userStore.token) {
      config.headers.token = userStore.token;
    }

    console.log(config);
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);
// 添加响应拦截器

instance.interceptors.response.use(
  function (response) {
    // 对响应数据做点什么
    console.log("进入response");
    let { data } = response;
    return data;
  },
  function (error) {
    // 对响应错误做点什么
    return Promise.reject(error);
  }
);
instance.postForm = (url: string, data: any) => {
  return instance.post(url, qs.stringify(data), {
    headers: { "content-type": "application/x-www-form-urlencoded" },
  });
};
export default instance;
