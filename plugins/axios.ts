import { Context } from '@nuxt/types';
import { AxiosRequestConfig } from 'axios';
import EventBus from '~/shared/event-bus';
import HelperMethods from '~/shared/helper-methods';
import store, { getAppStoreModule } from '~/store-modules';
export default function<Nuxt, Plugin>({ $axios }: Context) {
  const appStore = getAppStoreModule(store);
  $axios.defaults.baseURL = appStore.env.baseApiUrl;
  
  // add interceptors
  $axios.interceptors.request.use(async (config: AxiosRequestConfig) => {
    config.headers.common['x-user-timeZone'] = Intl.DateTimeFormat().resolvedOptions().timeZone;
    config.headers.common['x-user-timeZoneOffsetMinutes'] = new Date().getTimezoneOffset();
    config.headers.common.domain = `${window.location.protocol}//${window.location.host}`;
    return config;
  });

   $axios.interceptors.response.use(
    (response) => {
      return response;
    },
    async (error) => {
      // EventBus.$emit('error-modal::show', {message: error.message});
        return Promise.reject(error);
    }
  );
}
