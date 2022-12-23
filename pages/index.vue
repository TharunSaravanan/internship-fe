<template>
  <div class="parent-container">
    <h1>Find an internship program</h1>
     <h1>as a student</h1>
     <center><b-button variant="primary" @click="navigateToInternshipProg()">Internship Programs</b-button></center>
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

h1 {
  color: #eb5b02;
    font-weight: bold;
    font-size: 4rem;
}
</style>
