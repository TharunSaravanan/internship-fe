import { Plugin } from '@nuxt/types';
import { NuxtAxiosInstance } from '@nuxtjs/axios';

// eslint-disable-next-line import/no-mutable-exports
let axios:NuxtAxiosInstance;

export function initializeAxios(axiosInstance: NuxtAxiosInstance) {
  axios = axiosInstance;
}

export function getAxios() {
  return axios;
}

const accessor: Plugin = ({ $axios }) => {
  initializeAxios($axios);
};

export default accessor;
