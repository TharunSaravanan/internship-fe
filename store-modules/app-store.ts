import { Module } from 'nuxt-property-decorator';
import Vue from "vue";
import {
  VuexModule,
  Mutation,
  Action
} from 'vuex-module-decorators';
import { IEnvironmentVariables } from '~/view-models';
import store from '~/store-modules';

import { IAppStore } from './types/app-store';
import { getAxios } from '~/plugins/axios-accessor';
import AppService from '~/services/app-service';
import { filter } from 'vue/types/umd';
@Module({
  namespaced: true,
  name: 'appStore',
  stateFactory: true,
  store
})
export default class AppStoreModule extends VuexModule implements IAppStore {
  // State
  public env: IEnvironmentVariables = {} as IEnvironmentVariables;
  public arrInternships: any[] = [];
  public allArrIntenships: any[] = [];
  // Getters
  private get appService() {
    return new AppService(getAxios());
  }


  // Mutations
  @Mutation
  public setEnv(config: IEnvironmentVariables): void {
    this.env = config;
  }

  @Mutation
  public updateInternships(internships: any[]): void {
    this.arrInternships = internships;
    this.allArrIntenships = internships;
    // this.resetSelection(this.arrInternships)

  }
  @Mutation
  public resetSelection(internships: any[]) {
    this.arrInternships = internships.map(item => {
      item.isSelected = false;
    });
  }

  @Mutation
  public setShowMoreLessDetails(internship: any) {
    //this.resetSelection(this.arrInternships);
    let index = this.arrInternships.findIndex(item => item.id === internship.id);
    Vue.set(this.arrInternships, index, internship)
  }

  @Mutation
  public filterInternshipList(filterObject: { qualification: string, period: string, freeText: string }) {
    if (filterObject.qualification! = '') {
      this.arrInternships = this.allArrIntenships.filter(item => item.qualification === filterObject.qualification);
    }
    if (filterObject.period != '') {
      this.arrInternships = this.allArrIntenships.filter(item => item.period === filterObject.period);
    }
      this.arrInternships = this.allArrIntenships.filter(item => (item.name.concat( item.company).toLowerCase().includes(filterObject.freeText.toLowerCase())));
  }

  // Actions
  @Action({ rawError: true })
  public async getInternships(): Promise<void> {
    await this.appService.getInternships().then((response) => {
      console.log(response)
      this.updateInternships(response);
    });
  }
}


