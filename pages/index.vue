<template>
  <div class="parent-container">
    <h3>Are you a student looking to better yourself in your field? An internship is a great way to do that! <br/> <br/>  Here at Student Internships, we want you to have a nice and quick time finding an internship, and to achieve that we have tried to make the process of browsing as simple as possible, so go on ahead and start your search with the click of a button!</h3>
    <br/>
     <center><b-button variant="primary" @click="navigateToInternshipProg()">Find Your Internship</b-button></center>
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
  name: 'home'
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
.parent-container{
  position: absolute;
    top: 50%;
    left: 45%;
    -moz-transform: translateX(-50%) translateY(-50%);
    -webkit-transform: translateX(-50%) translateY(-50%);
    transform: translateX(-50%) translateY(-50%);
}

h3 {
  color: #eb5b02;
    font-weight: bold;
    font-size: 2rem;
}
</style>
