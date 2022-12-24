<template>
  <div class="parent-container row d-flex justify-content-center">
    <div class="col-md-4 col-sm-12 img-container">
      <img class="img-avatar" src="../assets/avatar1.png" />
      <div class="name-container">
        <span> Tharun</span>
        <span> Saravanan</span>
      </div>
    </div>
    <div class="col-sm-12 col-md-4">
      <h1>Hello!</h1>
      <h3 class="about-me-title">A Bit About Me</h3>
      <p>
        I'm a paragraph. Click here to add your own text and edit me. ​Ut enim
        ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
        aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit
        in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
      </p>
      <div class="d-flex justify-content-center mt-4">
        <b-button class="icon facebook"
          ><font-awesome-icon icon="fab fa-facebook-f" />
        </b-button>
        <b-button class="icon whatsapp"
          ><font-awesome-icon icon="fab fa-whatsapp" />
        </b-button>
        <b-button class="icon twitter"
          ><font-awesome-icon icon="fab fa-twitter" />
        </b-button>
        <b-button class="icon linkedin"
          ><font-awesome-icon icon="fab fa-linkedin" />
        </b-button>
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
  name: 'about-us',
})
export default class AboutUs extends BaseComponent {
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
  // Helper Methods
  // Event Methods
  // Watchers
  // Emitters
}
</script>
<style lang="scss" scoped>
.parent-container {
  height: 100%;
  padding-top: 4rem;
  background-color: #ffffff;
}

.img-container {
  text-align: center;
}

.img-avatar {
  border-radius: 50%;
  height: 300px;
}
p {
  font-size: 1.25rem;
  font-weight: 400;
}

.about-me-title {
  font-weight: 400;
  font-size: 2rem;
}

.name-container {
  font-size: 3rem;
  font-weight: 500;
  color: #eb5b02;
}

.icon {
  border-radius: 50%;
  margin: 1rem;
}
.icon:hover {
  opacity: 0.7;
}

.facebook {
  background: #3b5998;
  color: white;
}

.twitter {
  background: #55acee;
  color: white;
}

.whatsapp {
  background: #0ca678;
  color: white;
}

.linkedin {
  background: #007bb5;
  color: white;
}
</style>
