<template>
  <div id="app" class="default-layout">
    <header class="p-0">
      <b-navbar toggleable="lg">
        <b-navbar-brand href="#"
          ><div class="d-flex">
            <img src="../assets/NiceJob.png" />
            <h3>Student Internships</h3>
          </div></b-navbar-brand
        >
        <b-navbar-nav class="ml-auto">
          <b-nav-item @click="navigateTo('/')">Home</b-nav-item>
          <b-nav-item @click="navigateTo('/about-us')">About Us</b-nav-item>
          <b-nav-item @click="navigateTo('/contact-us')">Contact Us</b-nav-item>
        </b-navbar-nav>
      </b-navbar>
    </header>
    <nuxt />
    <error-modal />
  </div>
</template>

<script lang="ts">
// Libraries
import { Component } from 'nuxt-property-decorator'
// View Models
// Components
import BaseComponent from '@/shared/BaseComponent'
import ErrorModal from '@/components/shared/ErrorModal.vue'
import store, { getAppStoreModule } from '~/store-modules'
// Stores

@Component({
  components: {
    ErrorModal,
  },
  name: 'default-layout',
})
export default class DefaultLayout extends BaseComponent {
  // VUE.JS Props
  // VUEX
  // Properties
  public appStore = getAppStoreModule(store)
  // Getters
  // Lifecycle Handlers
  // beforeCreate(): void {}
  // private created(): void { }
  // beforeMount(): void {}
  // mounted (): void {}
  // beforeUpdate(): void {}
  // updated(): void {}
  // beforeDestroy(): void {}
  // destroyed(): void {}
  // Private Methods
  navigateTo(value: string): void {
    this.$router.push(value)
  }
  // Helper Methods
  // Event Methods
  // Watchers
  // Emitters
}
</script>
<style lang="scss" scoped>
@import '../assets/_general.scss';
.default-layout {
  height: 100vh;
  //background-color: blue;
  // background-image: "./assets/bgimage.jpeg";
  //    background: url(../assets/bgimage.jpeg) no-repeat 100%;
  background: url(../assets/bgimage1.jpg) no-repeat 100%;
}
h3 {
  color: white;
}
.navbar-light .navbar-nav .nav-link {
  color: white;
}
img {
  height: 48px;
}
h3 {
  color: #f0b616;
}
</style>
