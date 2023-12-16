import axios from 'axios'
import store from './store'

const axiosClient = axios.create({
    baseURL: import.meta.env.VITE_API_BASE_URL,
  });

  axiosClient.interceptors.request.use(function (config) {
    config.headers.Authorization = 'Bearer ' + localStorage.getItem('token');
    return config;
  }, function (error) {
    return Promise.reject(error);
  });
  axiosClient.interceptors.response.use(function (response) {
    if(response.status === 401){
        store.commit('logout');
    }

    return response;
}, function (error) {
  debugger;
    return Promise.reject(error);
});

export default axiosClient;