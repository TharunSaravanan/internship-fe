<template>
  <div id="app" class="default-layout">
    <div>
      <header class="p-0 default-layout__header">
        <b-navbar toggleable="lg" fixed="top" class="nav-bar">
          <b-navbar-brand href="#" class="ml-3">
            <img class="nav-bar__brand-img" src="../assets/logoWithText.png" />
            <span class="nav-bar__brand-title"></span>
          </b-navbar-brand>
          <!-- For responsive design of the nav bar -->
          <b-navbar-toggle target="navbar-toggle-collapse" class="mr-3">
            <template>
              <font-awesome-icon icon="fa-solid fa-bars" />
            </template>
          </b-navbar-toggle>
          <b-collapse id="navbar-toggle-collapse" is-nav>
            <b-navbar-nav class="ml-auto nav-bar__nav-items">
              <b-nav-item @click="navigateTo('/')">
                <span
                  :class="[
                    isLinkActive('/')
                      ? 'nav-bar__nav-item-active'
                      : 'nav-bar__nav-item',
                  ]"
                  >Home</span
                >
              </b-nav-item>
              <b-nav-item @click="navigateTo('/internship-program')">
                <span
                  :class="[
                    isLinkActive('/internship-program')
                      ? 'nav-bar__nav-item-active'
                      : 'nav-bar__nav-item',
                  ]"
                  >Internships</span
                >
              </b-nav-item>
              <b-nav-item @click="navigateTo('/about-us')">
                <span
                  :class="[
                    isLinkActive('/about-us')
                      ? 'nav-bar__nav-item-active'
                      : 'nav-bar__nav-item',
                  ]"
                  >About Us</span
                >
              </b-nav-item>
              <b-nav-item @click="navigateTo('/contact-us')">
                <span
                  :class="[
                    isLinkActive('/contact-us')
                      ? 'nav-bar__nav-item-active'
                      : 'nav-bar__nav-item',
                  ]"
                  >Contact Us</span
                >
              </b-nav-item>
            </b-navbar-nav>
          </b-collapse>
        </b-navbar>
      </header>
    </div>
      <div class="default-layout__route-container">
        <nuxt />
      </div>
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
  private navigateTo(value: string): void {
    this.$router.push(value)
  }

  private isLinkActive(activePath: string): boolean {
    return this.$route.path === activePath
  }
  // Helper Methods
  // Event Methods
  // Watchers
  // Emitters
}
</script>
<style lang="scss">
@import '../assets/_general.scss';
.default-layout {
  overflow-y: hidden;
  height: 100%;
  &__header {
    .nav-bar {
      padding: 0;
      height: 3.5rem;
      border-bottom: 1px solid #f2f2f2;
      box-shadow: #def2f1 0px 6px 8px -2px, #feffff 0px 3px 8px -3px;
      background-image: linear-gradient(to bottom right, #def2f1, #feffff);
      @media only screen and (max-width: 912px) {
        padding-top: 0;
        margin-top: -5px;
        // height: 4rem;
      }
      &__brand-img {
        height: 45px;
      }
      &__brand-title {
        font-size: 1.75rem;
        color: #2b7a78;
        font-weight: 400;
        @media only screen and (max-width: 450px) {
          display: none;
        }
      }
      &__nav-items {
        font-size: 17px;
        font-weight: 500;
      }
      &__nav-item {
        color: #3aafa9;
        text-align: center;
        display: block;
      }
      &__nav-item-active {
        color: #2b7a78;
        text-align: center;
        text-decoration: overline;
        display: block;
      }
    }
  }
  &__route-container {
    height: calc(100% - 3.5rem);
    margin-top: 3.5rem;
  }
}

.navbar-collapse {
  background-image: linear-gradient(to bottom right, #def2f1, #feffff);
  margin-top: -4px !important;
}
</style>
