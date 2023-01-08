<template>
  <div class="internship-tile-container">
    <div
      class="internship-tile-container__tile"
      v-for="internship of getInternshipList"
      :key="internship.id"
      @click="tileClickHandler(internship)"
    >
      <div
        class="
          d-flex
          justify-content-between
          internship-tile-container__tile__heading
        "
      >
        <div>
          <h3 class="text-title">{{ internship.name }}</h3>
          <span class="text-sub-title mt-1">
            <a
              :href="internship.companyUrl"
              target="_blank"
              @click="linkEventHandler($event)"
              ><span
                >{{ internship.company }} | {{ internship.industry }}</span
              ></a
            >
          </span>
        </div>
        <div>
          <a
            :href="internship.jobUrl"
            target="_blank"
            class="btn-apply-now"
            @click="linkEventHandler($event)"
            >Apply Now
          </a>
        </div>
      </div>
      <div class="d-flex text-details mt-1">
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

      <!-- <hr class="px-4 my-2" />

      <span v-if="!internship.isSelected"
        ><span
          v-for="(text, lineNumber) of internship.description
            .slice(0, 125)
            .split('\n')"
          v-bind:key="lineNumber"
        >
          {{ text }}<br /> </span
      ></span>
      <div class="d-flex justify-content-end">
        <b-link
          v-if="!internship.isSelected"
          @click="showMoreLessDetails(internship, true)"
          class="link-show-more-less"
          href=""
          >Show more...</b-link
        >
      </div>
      <span v-if="internship.isSelected">
        <span
          v-for="(text, lineNumber) of internship.description.split('\n')"
          v-bind:key="lineNumber"
        >
          {{ text }}<br />
        </span>
        <div class="d-flex justify-content-end">
          <b-link
            @click="showMoreLessDetails(internship, false)"
            class="link-show-more-less"
            href=""
            >Show less...</b-link
          >
        </div>
      </span> -->
    </div>
  </div>
</template>
<script lang="ts">
// Libraries
import { Component } from 'nuxt-property-decorator'
// View Models
// Components
import { IErrorViewModel } from '@/view-models'
import BaseComponent from '@/shared/BaseComponent'
import EventBus from '@/shared/event-bus'
import store, { getAppStoreModule } from '~/store-modules'
import { IInternship } from '~/view-models/internship-view-model'
// Services
@Component({
  name: 'internship-tile',
})
export default class InternshipTile extends BaseComponent {
  // VUE.JS Props
  // VUEX
  // Properties
  public appStore = getAppStoreModule(store)
 
  // Fields
  // Getters
  private get getInternshipList() {
    return this.appStore.getInternshipsWithPagination
  }
  // Lifecycle Handlers
  // beforeCreate(): void {}
  // beforeMount(): void {}
  public created(): void {}
  public mounted(): void {
  }
  // beforeUpdate(): void {}
  // updated(): void {}
  // beforeDestroy(): void {}
  // destroyed(): void {}
  // Private Methods
  private showMoreLessDetails(internship: IInternship, value: boolean) {
    internship.isSelected = value
    this.appStore.setShowMoreLessDetails(internship)
  }

  private linkEventHandler(event: MouseEvent): void {
    event.stopPropagation()
  }

  private tileClickHandler(internship: IInternship): void {
    this.$emit('tileClickHandler', internship);
  }

 
  // Helper Methods
  // Event Methods
  // Watchers
  // Emitters
}
</script>
<style lang="scss" scoped>
.internship-tile-container {
  height: 100%;
  overflow-y: auto;
  cursor: pointer;
  &__tile {
    border: 1px solid #d0d2d6;
    border-radius: 0.25rem;
    padding: 0.5rem;
    margin-bottom: 0.5rem;
    &:hover {
      border-left: 5px solid #3b945e;
    }
    &__heading {
      .text-title {
        font-size: 1.25rem;
        line-height: 1.5rem;
        font-weight: 500;
        margin: 0;
      }

      .text-sub-title {
        font-size: 1rem;
        line-height: 1.5rem;
        margin: 0;
      }

      .btn-apply-now {
        font-size: 1rem;
        font-weight: 500;
      }
    }
    .text-details {
      color: #696969;
      flex-wrap: wrap;
    }
  }
}
.link-show-more-less {
  font-size: 14px;
}
</style>
