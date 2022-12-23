import { Module } from 'nuxt-property-decorator';
import {
    VuexModule,
    Mutation,
    Action
  } from 'vuex-module-decorators';
import { IEnvironmentVariables } from '~/view-models';
import store from '~/store-modules';
import { IAppStore } from './types/app-store';
import { getAxios } from '~/plugins/axios-accessor';
@Module({
    namespaced: true,
    name: 'appStore',
    stateFactory: true,
    store
})
export default class AppStoreModule extends VuexModule implements IAppStore {
    // State
    public env: IEnvironmentVariables = {} as IEnvironmentVariables;
    // Getters


    
    // Mutations
    @Mutation
    public setEnv(config: IEnvironmentVariables): void {
      this.env = config;
    }

    // Actions

}


