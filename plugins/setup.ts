import '@nuxtjs/axios';
import { AxiosResponse } from 'axios';
import Vue from 'vue';
import { Context } from '@nuxt/vue-app';
import { IEnvironmentVariables } from '@/view-models';
import HelperMethods from '@/shared/helper-methods';
import store, { getAppStoreModule } from '~/store-modules';
import { BootstrapVueIcons } from 'bootstrap-vue';

Vue.use(BootstrapVueIcons);

export default async function<Nuxt, Plugin>({ $axios }: typeof Context): Promise<void> {
  const appStore = getAppStoreModule(store);
  const scheme: string = window.location.protocol;
  const host: string = window.location.host;
  const config: IEnvironmentVariables = await $axios
    .get(`${scheme}//${host}/env.json`)
    .then((response: AxiosResponse) => response.data);
  appStore.setEnv(config);

  const globalHandler = function(error: any) {
    HelperMethods.catch($axios, error);
  };
  
  Vue.config.errorHandler = globalHandler;

}
