<template>
  <div class="parent-container d-flex justify-content-center">
    <div class="col-md-8">
      <h3>Internships</h3>
      <div class="d-flex p-0 m-0">
        <div class="col-md-3 col-sm-12 m-0 p-0">
          <b-dropdown
            :text="selectedQualification"
            block
            split
            variant="default"
            class="w-100"
          >
            <b-dropdown-item @click="qualificationSelect('All')"
              >All</b-dropdown-item
            >
            <b-dropdown-item @click="qualificationSelect('High School')"
              >High School</b-dropdown-item
            >
            <b-dropdown-item @click="qualificationSelect('University')"
              >University</b-dropdown-item
            >
          </b-dropdown>
          <label class="form-label">Qualification </label>
        </div>
        <div class="col-md-3 col-sm-12 m-0 p-0 ml-4">
          <b-dropdown
            :text="selectedPeriod"
            block
            split
            variant="default"
            class="w-100"
          >
            <b-dropdown-item @click="periodSelect('All')">All</b-dropdown-item>
            <b-dropdown-item @click="periodSelect('Summer 2023')"
              >Summer 2023</b-dropdown-item
            >
            <b-dropdown-item @click="periodSelect('Fall 2023')"
              >Fall 2023</b-dropdown-item
            >
            <b-dropdown-item @click="periodSelect('Year Round')"
              >Year Round</b-dropdown-item
            >
          </b-dropdown>
          <label class="form-label">Period </label>
        </div>
        <div class="col-md-3 col-sm-12 m-0 p-0 ml-4">
          <b-form-input
            v-model="filterText"
            id="input-2"
            placeholder="Enter name"
            required
          ></b-form-input>
          <label class="form-label">Title/Company </label>
        </div>
        <div class="ml-4">
          <b-button variant="primary" @click="applyFilter()"> Search</b-button>
        </div>
      </div>
      <div class="internship-list pt-2">
        <div
          class="tile-container"
          v-for="internship of getInternshipList"
          :key="internship.id"
        >
          <div class="d-flex justify-content-between">
            <div>
              <h3 class="text-title">{{ internship.name }}</h3>
              <p class="text-sub-title mt-1">
                <a :href="internship.companyUrl" target="_blank"
                  ><span
                    >{{ internship.company }} | {{ internship.industry }}</span
                  ></a
                >
              </p>
              <div class="d-flex text-details mt-2">
                <span class="pr-4"
                  ><font-awesome-icon icon="fa-solid fa-calendar-days" />
                  {{ internship.postedDate }}
                </span>
                <span class="pr-4"
                  ><font-awesome-icon icon="fa-solid fa-location-dot" />
                  {{ internship.city + '(' + internship.countryCode + ')' }}
                </span>
                <span class="pr-4"
                  ><font-awesome-icon icon="fa-solid fa-building-columns" />
                  {{ internship.qualification }}
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
                  {{ internship.period }}
                </span>
              </div>
            </div>
            <div>
              <a :href="internship.jobUrl" target="_blank" class="btn-apply-now"
                >Apply Now
              </a>
            </div>
          </div>
          <hr class="px-4 my-2" />
          <!-- <p v-html="internship.description">
            {{internship.description}}
          </p> -->

          <span v-if="!internship.isSelected"
            ><span
              v-for="(text, lineNumber) of internship.description
                .slice(0, 200)
                .split('\n')"
              v-bind:key="lineNumber"
            >
              {{ text }}<br /> </span
          ></span>
          <div class="d-flex justify-content-end">
            <b-link
              v-if="!internship.isSelected"
              @click="showMoreLessDetails(internship, true)"
              href=""
              >Show more...</b-link
            >
          </div>
          <!-- <a
            v-if="!internship.isSelected"
            @click="showMoreDetails(internship)"
            href=""
          >
            Show more details...
          </a> -->
          <span v-if="internship.isSelected">
            <span
              v-for="(text, lineNumber) of internship.description.split('\n')"
              v-bind:key="lineNumber"
            >
              {{ text }}<br />
            </span>
            <div class="d-flex justify-content-end">
              <b-link @click="showMoreLessDetails(internship, false)" href=""
                >Show less...</b-link
              >
            </div>
          </span>

          <!-- <span
            v-for="(text, lineNumber) of internship.description.split('\n')"
            v-bind:key="lineNumber"
          >
            {{ text }}<br />
          </span> -->
        </div>
      </div>
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
// Stores
@Component({
  name: 'internship-prog',
})
export default class InternshipProgram extends BaseComponent {
  // VUE.JS Props
  // VUEX
  // Properties
  public appStore = getAppStoreModule(store)
  public selectedQualification: string = ''
  public selectedPeriod: string = ''
  public filterText: string = ''
  // Getters
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
    this.filterText = ''
    this.appStore.getInternships()
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

  private showMoreLessDetails(internship: any, value: boolean) {
    internship.isSelected = value
    this.appStore.setShowMoreLessDetails(internship)
  }

  private applyFilter() {
    let filterObject = {
      qualification:
        this.selectedQualification === 'All' ? '' : this.selectedQualification,
      period: this.selectedPeriod === 'All' ? '' : this.selectedPeriod,
      freeText: this.filterText,
    }
    this.appStore.filterInternshipList(filterObject)
  }
  // Helper Methods
  // Event Methods
  // Watchers
  // Emitters
}
</script>
<style lang="scss" scoped>
@import '../assets/_general.scss';
.parent-container {
  height: 100%;
  padding-top: 4rem;
  background-color: #ffffff;
}
.internship-list {
  border-top: 1px solid #f2f2f2;
  margin-top: 0.5rem;
}

// h3 {
//   color: #f0b616;
// }

.tile-container {
  border: 1px solid #d0d2d6;
  border-radius: 0.5rem;
  padding: 0.5rem;
  margin-bottom: 0.5rem;
}

.text-title {
  font-size: 1.25rem;
  line-height: 1.75rem;
  font-weight: 600;
  margin: 0;
}

.text-sub-title {
  font-size: 1rem;
  line-height: 1.5rem;
  margin: 0;
}

.text-details {
  color: #696969;
}

.btn-apply-now {
  font-size: 1rem;
  font-weight: 500;
}
</style>
