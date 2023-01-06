<template>
  <div class="home-container container-fluid">
    <span class="home-container__welcome-title">
      <center>Welcome to <span>Student Internships</span></center>
    </span>

    <div class="home-container__description1">
      <center>
        Are you a student looking to better yourself in your field?
      </center>
      <span>
        <center>An internship is a great way to do that!</center>
      </span>
    </div>

    <div class="home-container__description2">
      <center>
        Here at <strong>Student Internships</strong>, we want you to have a nice
        and quick time finding an internship, so go on ahead
        and start your search with the click of a button!
      </center>
      <center>
        <b-button class="btn-internship" variant="primary" @click="navigateToInternshipProg()"
          >Find Your Internship</b-button
        >
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
// Stores
@Component({
  name: 'home',
})
export default class Home extends BaseComponent {
  // VUE.JS Props
  // VUEX
  // Properties
  public appStore = getAppStoreModule(store)
  // Lifecycle Handlers
  // beforeCreate (): void {}
  // beforeMount(): void {}
  // created(): void {}
  // beforeMount(): void {}
  // mounted: void () {  }
  // beforeUpdate(): void {}
  // updated(): void {}
  // beforeDestroy (): void {}
  // destroyed(): void {}
  // Private Methods
  navigateToInternshipProg(): void {
    this.$router.push('/internship-program')
  }
  // Helper Methods
  // Event Methods
  // Watchers
  // Emitters
}
</script>
<style lang="scss" scoped>
@import '../assets/_general.scss';
.home-container {
  overflow-y: auto;
  padding-bottom: 1.5rem;
  padding-top: 2rem;
  height: 100%;
  background: linear-gradient(
      to right top,
      #def2f1,
      #e4f5f4,
      #eaf7f7,
      #f0faf9,
      #f6fcfc,
      #f6fcfc,
      #f6fcfc,
      #f6fcfc,
      #f0faf9,
      #eaf7f7,
      #e4f5f4,
      #def2f1
    )
    repeat-x scroll 0% 0%;
  &__welcome-title {
    font-size: 2.5rem;
    font-weight: 300;
    color: #3b945e;
    span {
      color: #fccd04;
    }
  }
  &__description1 {
    margin-top: 3rem;
    font-size: 2.5rem;
    font-weight: 500;
    color: #3b945e;
    span {
      font-size: 2.5rem;
      font-weight: 400;
    }
  }
  &__description2 {
    margin-top: 3rem;
    font-size: 2rem;
    font-weight: 300;
    color: #2b7a78;
  }
}

//.btn-internship {
//  margin-bottom: 2rem;
//}
</style>
