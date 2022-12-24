<template>
  <div class="parent-container row d-flex justify-content-center">
    <div class="col-md-2 col-sm-12 contact">
      <div class="row">
        <div class="icon">
          <font-awesome-icon icon="fa-solid fa-location-dot" />
        </div>
        <div>
          <h4 class="heading-title">Address</h4>
          <p>address 1</p>
        </div>
      </div>
      <div class="row mt-4">
        <div class="icon">
          <font-awesome-icon icon="fa-solid fa-phone" />
        </div>
        <div>
          <h4 class="heading-title">Lets Talk</h4>
          <p>1234567890</p>
        </div>
      </div>
      <div class="row mt-4">
        <div class="icon">
          <font-awesome-icon icon="fa-solid fa-envelope" />
        </div>
        <div>
          <h4 class="heading-title">Email</h4>
          <p>abcd@gmail.com</p>
        </div>
      </div>
    </div>
    <div class="col-sm-12 col-md-4 message-container">
      <h4>Send Us A Message</h4>
      <b-form class="mt-4">
        <b-form-group id="input-group-2" label="Name" label-for="input-2">
          <b-form-input
            id="input-2"
            placeholder="Enter name"
            required
          ></b-form-input>
        </b-form-group>
        <b-form-group id="input-group-2" label="Email" label-for="input-2">
          <b-form-input
            id="input-2"
            placeholder="Enter email"
            required
          ></b-form-input>
        </b-form-group>
        <b-form-group id="input-group-2" label="Message" label-for="input-2">
          <b-form-textarea
            id="textarea-large"
            size="lg"
            placeholder="Message"
          ></b-form-textarea>
        </b-form-group>
        <div class="d-flex justify-content-end">
         <b-button type="submit" variant="primary">Submit</b-button>
        </div>
      </b-form>
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
  name: 'contact-us',
})
export default class ContactUs extends BaseComponent {
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
  background-color: #ffffff;
}

.icon {
  font-size: 1.5rem;
  margin-right: 1.5rem;
}

.geo-icon {
  font-size: 32px;
}

.heading-title {
  margin-top: 2px;
}

.contact {
  margin-top: 6rem;
  margin-left: 10rem;
}

.message-container {
  padding-left: 2rem;
  margin-top: 4rem;
  border-left: 1px solid #000000;
  height: fit-content;
}

h4 {
  font-weight: 400;
}
</style>
