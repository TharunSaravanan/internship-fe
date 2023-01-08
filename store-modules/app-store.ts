import { Module } from 'nuxt-property-decorator';
import Vue from "vue";
import {
  VuexModule,
  Mutation,
  Action
} from 'vuex-module-decorators';
import { IBootstrapSelectValues, IEnvironmentVariables } from '~/view-models';
import store from '~/store-modules';

import { IAppStore } from './types/app-store';
import { getAxios } from '~/plugins/axios-accessor';
import AppService from '~/services/app-service';
import { filter } from 'vue/types/umd';
import { IFilterRequestPayload, IInternship } from '~/view-models/internship-view-model';
@Module({
  namespaced: true,
  name: 'appStore',
  stateFactory: true,
  store
})
export default class AppStoreModule extends VuexModule implements IAppStore {
  // State
  public env: IEnvironmentVariables = {} as IEnvironmentVariables;
  public arrInternships: IInternship[] = [];
  public allArrIntenships: IInternship[] = [];
  public currentPage: number = 1;
  public totalCount: number = 0;
  public perPage: number = 10;
  //Master Data
  public ddQualification: IBootstrapSelectValues[] = [{ id: 1, name: "All" }, { id: 1, name: "High School" }, { id: 1, name: "University" }];
  public ddPeriod: IBootstrapSelectValues[] = [{ id: 1, name: "All" }, { id: 1, name: "Summer 2023" }, { id: 1, name: "Fall 2023" }, { id: 1, name: "Year Round" }];
  public ddIndustries: IBootstrapSelectValues[] = [];
  // Getters
  public get appService() {
    return new AppService(getAxios());
  }

  public get getDDQualification(): IBootstrapSelectValues[] {
    return this.ddQualification;
  }

  public get getDDPeriod(): IBootstrapSelectValues[] {
    return this.ddPeriod;
  }

  public get getInternshipsWithPagination(): IInternship[] {
    const startValue = (this.currentPage * this.perPage) - this.perPage;
    return this.arrInternships.slice(startValue, startValue + this.perPage);
  }


  // Mutations
  @Mutation
  public setEnv(config: IEnvironmentVariables): void {
    this.env = config;
  }

  @Mutation
  public updateInternships(internships: IInternship[]): void {
    this.arrInternships = internships;
    this.allArrIntenships = internships;
    this.totalCount = this.arrInternships.length;
    this.currentPage = 1;
  }
  @Mutation
  public resetSelection(): void {
    this.arrInternships = this.arrInternships.map(item => {
      item.isSelected = false;
      return item;
    });
  }

  @Mutation
  public updateCurrentPageNumber(pageNumber: number): void {
    this.currentPage = pageNumber;
  }

  @Mutation
  public setShowMoreLessDetails(internship: IInternship): void {
    let index = this.arrInternships.findIndex(item => item.id === internship.id);
    Vue.set(this.arrInternships, index, internship)
  }

  @Mutation
  public filterInternshipList(filterObject: IFilterRequestPayload): void {
    this.arrInternships = [];
    let internships = this.allArrIntenships;
    if (filterObject.qualification !== '') {
      internships = internships.filter(item => item.qualification === filterObject.qualification);
    }
    if (filterObject.period !== '') {
      internships = internships.filter(item => item.period === filterObject.period);
    }
    if (filterObject.industry !== '') {
      internships = internships.filter(item => item.industry === filterObject.industry);
    }
    //internships = internships.filter(item => (item.name.concat(item.company).toLowerCase().includes(filterObject.freeText.toLowerCase())));
    this.arrInternships = internships;
    this.totalCount = this.arrInternships.length;
    this.currentPage = 1;
  }

  @Mutation
  public setIndustries(internships: IInternship[]): void {
    this.ddIndustries = []
    let industries: IBootstrapSelectValues[] = [];   
    internships.forEach((item: IInternship, index) => {
      if (!industries.some((industry) => industry.name === item.industry)) {
        industries.push({ id: index, name: item.industry } as IBootstrapSelectValues);
      }
    })

    
    this.ddIndustries = industries.sort((a, b) => a.name.localeCompare(b.name)) ;
    industries.unshift({ id: 0, name: 'All' })
  }

  // Actions
  @Action({ rawError: true })
  public async getInternships(): Promise<void> {
    await this.appService.getInternships().then((response) => {
      this.updateInternships(response);
      this.setIndustries(response);
    });
  }
}


