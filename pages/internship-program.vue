<template>
  <div class="internship-container container px-2">
    <div class="col-md-8 px-0" v-if="!showDetailsSection">
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
      <!-- Responsive filter section -->
      <div class="d-flex justify-content-end">
        <b-link id="apply-filter">Apply Filter </b-link>
      </div>

      <b-popover
        target="apply-filter"
        triggers="click"
        :show.sync="popoverShow"
        placement="auto"
        container="my-container"
        ref="popover"
      >
        <template #title>
          <b-button @click="onClose()" class="close" aria-label="Close">
            <span class="d-inline-block" aria-hidden="true">&times;</span>
          </b-button>
          Filter
        </template>

        <div>
          <div>
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
          <div>
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
          <div>
            <b-dropdown
              :text="selectedIndustry"
              variant="default"
              class="w-100"
            >
              <b-dropdown-item
                v-for="industry of ddIndustries"
                :key="industry.id + industry.name"
                @click="industrySelect(industry.name)"
                >{{ industry.name }}</b-dropdown-item
              >
            </b-dropdown>
            <label class="form-label">Industry </label>
          </div>
          <div class="d-flex mt-3">
            <b-button @click="resetFilter()" size="sm" class="mx-3" variant="secondary"
              >Reset Filter</b-button
            >
            <b-button @click="applyFilter()" size="sm" class="mx-3" variant="primary"
              >Apply</b-button
            >
          </div>
        </div>
      </b-popover>

      <b-overlay
        :show="isLoading"
        rounded="lg"
        class="internship-container__internship-parent"
      >
        <div class="internship-container__internship-list pt-2">
          <internship-tile @tileClickHandler="tileClickHandler" />
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
    <div
      class="internship-container__details-section col-md-9 col-sm-12 px-1"
      v-if="showDetailsSection"
    >
      <span class="d-block">
        <b-link href="" @click="backToInternshipList()"
          ><font-awesome-icon icon="fa-solid fa-arrow-left" /> Back</b-link
        >
      </span>
      <center>
        <h3>{{ selectedInternship.name }}</h3>
      </center>
      <div class="mt-4 txt-details">
        <h5>{{ selectedInternship.company }}</h5>
        <label>Company</label>
      </div>
      <div class="mt-2 txt-details">
        <h5>{{ selectedInternship.industry }}</h5>
        <label>Industry</label>
      </div>

      <div class="d-flex py-3">
        <span class="pr-4"
          ><font-awesome-icon icon="fa-solid fa-calendar-days" />
          {{ selectedInternship.postedDate }}
        </span>
        <span class="pr-4"
          ><font-awesome-icon icon="fa-solid fa-location-dot" />
          {{
            selectedInternship.city + '(' + selectedInternship.countryCode + ')'
          }}
        </span>
        <span class="pr-4"
          ><font-awesome-icon icon="fa-solid fa-building-columns" />
          {{ selectedInternship.qualification }}
        </span>
        <span class="pr-4"
          ><span
            ><svg
              stroke="currentColor"
              fill="currentColor"
              stroke-width="0"
              viewBox="0 0 512 512"
              class="shrink-0"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M256,8C119,8,8,119,8,256S119,504,256,504,504,393,504,256,393,8,256,8Zm92.49,313h0l-20,25a16,16,0,0,1-22.49,2.5h0l-67-49.72a40,40,0,0,1-15-31.23V112a16,16,0,0,1,16-16h32a16,16,0,0,1,16,16V256l58,42.5A16,16,0,0,1,348.49,321Z"
              ></path></svg
          ></span>
          {{ selectedInternship.period }}
        </span>
      </div>
      <h5 class="mb-2">Internship Description</h5>
      <p
        v-for="(text, lineNumber) of selectedInternship.description.split('\n')"
        v-bind:key="lineNumber"
      >
        {{ text }}<br />
      </p>
      <center>
        <b-button
          class="w-100"
          variant="primary"
          @click="openLink(selectedInternship.jobUrl)"
          >Apply Now
        </b-button>
      </center>
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
  public selectedInternship: IInternship = {} as IInternship
  public showDetailsSection: boolean = false
  public popoverShow: boolean = false
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
    this.showDetailsSection = false
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

  private resetFilter(): void {
    this.selectedQualification = 'All'
    this.selectedPeriod = 'All'
    this.selectedIndustry = 'All'
    this.applyFilter()
  }

  private applyFilter() {
    let filterObject: IFilterRequestPayload = {
      qualification:
        this.selectedQualification === 'All' ? '' : this.selectedQualification,
      period: this.selectedPeriod === 'All' ? '' : this.selectedPeriod,
      industry: this.selectedIndustry === 'All' ? '' : this.selectedIndustry,
    }
    this.appStore.filterInternshipList(filterObject)
    this.popoverShow = false
  }

  private paginationChangeHandler(pageNumber: number): void {
    this.appStore.updateCurrentPageNumber(pageNumber)
  }

  private backToInternshipList(): void {
    this.showDetailsSection = false
  }
  private tileClickHandler(internship: IInternship): void {
    this.selectedInternship = internship
    this.showDetailsSection = true
  }

  private openLink(url: string): void {
    window.open(url, '_blank')
  }

  private onClose() {
    this.popoverShow = false
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
  @media only screen and (max-width: 768px) {
    padding-top: 0.25rem;
  }
  display: flex;
  justify-content: center;
  height: 100%;
  &__filter-section {
    display: flex;
    justify-content: space-between;
    .no-space {
      padding: 0;
      margin: 0;
    }
  }
  &__internship-parent {
    height: 80%;
  }
  &__internship-list {
    height: 100% !important;
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
  &__details-section {
    height: 100%;
    overflow-y: auto;
    padding-bottom: 1.5rem;
    .txt-details {
      line-height: 0.75rem;
    }
    h5 {
      margin-bottom: 0;
    }
  }
  #apply-filter {
    display: none;
  }
  @media only screen and (max-width: 768px) {
    #apply-filter {
      display: block;
    }
    .internship-container {
      &__filter-section {
        display: none;
      }
      &__internship-parent {
        height: 85%;
      }
    }
  }
}
</style>
