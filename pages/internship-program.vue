<template>
  <div class="internship-container container-fluid">
    <div class="col-md-8">
      <div class="internship-container__filter-section">
        <div class="col-md-3 col-sm-12 no-space">
          <b-dropdown
            :text="selectedQualification"
            variant="default"
            class="w-100"
          >
            <b-dropdown-item
              v-for="qualification of ddQualifications"
              :key="qualification.id + qualification.name"
              @click="qualificationSelect(qualification.name)"
              >{{ qualification.name }}</b-dropdown-item
            >
          </b-dropdown>
          <label class="form-label">Qualification </label>
        </div>
        <div class="col-md-3 col-sm-12 no-space">
          <b-dropdown :text="selectedPeriod" variant="default" class="w-100">
            <b-dropdown-item
              v-for="period of ddPeriods"
              :key="period.id + period.name"
              @click="periodSelect(period.name)"
              >{{ period.name }}</b-dropdown-item
            >
          </b-dropdown>
          <label class="form-label">Period </label>
        </div>
        <div class="col-md-3 col-sm-12 no-space">
          <!-- <b-form-input
              v-model="filterText"
              id="input-2"
              placeholder="Enter name"
              required
            ></b-form-input>
            <label class="form-label">Title/Company </label> -->
          <b-dropdown :text="selectedIndustry" variant="default" class="w-100">
            <b-dropdown-item
              v-for="industry of ddIndustries"
              :key="industry.id + industry.name"
              @click="industrySelect(industry.name)"
              >{{ industry.name }}</b-dropdown-item
            >
          </b-dropdown>
          <label class="form-label">Industry </label>
        </div>
        <div class="ml-4">
          <b-button variant="primary" @click="applyFilter()"> Apply</b-button>
        </div>
      </div>
      <b-overlay :show="isLoading" rounded="lg">
        <div class="internship-container__internship-list pt-2">
          <internship-tile />
        </div>
      </b-overlay>
      <b-pagination
        class="my-2"
        v-model="currentPage"
        @change="paginationChangeHandler($event)"
        :total-rows="appStore.totalCount"
        :per-page="appStore.perPage"
        align="fill"
        :disabled="isLoading"
      ></b-pagination>
    </div>
  </div>
</template>

<script lang="ts">
// Libraries
import { Component, Watch } from 'nuxt-property-decorator'
// View Models
// Components
import BaseComponent from '@/shared/BaseComponent'
import store, { getAppStoreModule } from '~/store-modules'
import {
  IFilterRequestPayload,
  IInternship,
} from '~/view-models/internship-view-model'
import InternshipTile from '~/components/InternshipTile.vue'
// Stores
@Component({
  name: 'internship-prog',
  components: {
    InternshipTile,
  },
})
export default class InternshipProgram extends BaseComponent {
  // VUE.JS Props
  // VUEX
  // Properties
  public appStore = getAppStoreModule(store)
  public selectedQualification: string = ''
  public selectedPeriod: string = ''
  public selectedIndustry: string = ''
  public filterText: string = ''
  //Pagination
  public currentPage: number = 1
  // Getters
  private get ddQualifications() {
    return this.appStore.ddQualification
  }

  private get ddPeriods() {
    return this.appStore.ddPeriod
  }

  private get ddIndustries() {
    return this.appStore.ddIndustries
  }

  private get getInternshipList() {
    return this.appStore.arrInternships
  }
  // Lifecycle Handlers
  // beforeCreate (): void {}
  // beforeMount(): void {}
  // created(): void {}
  // beforeMount(): void {}
  private mounted(): void {
    this.selectedQualification = 'All'
    this.selectedPeriod = 'All'
    this.selectedIndustry = 'All'
    this.filterText = ''
    this.updateLoading(true)
    this.appStore.getInternships().then(() => {
      this.updateLoading(false)
    })
  }
  // beforeUpdate(): void {}
  // updated(): void {}
  // beforeDestroy (): void {}
  // destroyed(): void {}
  // Private Methods
  private qualificationSelect(option: string): void {
    this.selectedQualification = option
  }

  private periodSelect(option: string): void {
    this.selectedPeriod = option
  }

  private industrySelect(option: string): void {
    this.selectedIndustry = option
  }

  private applyFilter() {
    let filterObject: IFilterRequestPayload = {
      qualification:
        this.selectedQualification === 'All' ? '' : this.selectedQualification,
      period: this.selectedPeriod === 'All' ? '' : this.selectedPeriod,
      industry: this.selectedIndustry === 'All' ? '' : this.selectedIndustry,
    }
    this.appStore.filterInternshipList(filterObject)
  }

  private paginationChangeHandler(pageNumber: number): void {
    this.appStore.updateCurrentPageNumber(pageNumber)
  }
  // Helper Methods
  // Event Methods
  // Watchers
  // Emitters
}
</script>
<style lang="scss" scoped>
@import '../assets/_general.scss';
.internship-container {
  padding-top: 1rem;
  display: flex;
  justify-content: center;
  &__filter-section {
    display: flex;
    justify-content: space-between;
    .no-space {
      padding: 0;
      margin: 0;
    }
  }
  &__internship-list {
    border-top: 1px solid #e2e2e2;
    margin-top: 0.5rem;
    .pagination {
      //  display: flex;
      //  justify-content: center;
      ul {
        margin-bottom: 0.5rem;
        margin-top: 0.5rem;
      }
    }
  }
}
</style>
