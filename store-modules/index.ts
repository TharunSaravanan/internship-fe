import { getModule } from 'nuxt-property-decorator';
import Vue from 'vue';
import Vuex, { Store } from 'vuex';
import AppStoreModule  from './app-store';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    appStore: AppStoreModule,
  }
});

export function getAppStoreModule(store: Store<any>): AppStoreModule {
  return getModule(AppStoreModule, store);
}
