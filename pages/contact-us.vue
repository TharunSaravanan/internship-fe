<template>
  <div class="contact-container">
    <div class="col-md-8 contact-section">
      <!-- <h3 class="contact-section__title">Contact Us</h3> -->
      <div class="col-md-4 col-sm-12 contact-section__detail">
        <b-button class="contact-section__detail__icon"
          ><font-awesome-icon icon="fa-solid fa-location-dot" />
        </b-button>
        <label><b>#21B, Kalyani Tech Park, Bangalore - 560036</b></label>
      </div>

      <div class="col-md-4 col-sm-12 contact-section__detail">
        <b-button class="contact-section__detail__icon"
          ><font-awesome-icon icon="fa-solid fa-phone" />
        </b-button>
        <label>Phone: <b>+1(316 519-1547)</b></label>
      </div>

      <div class="col-md-4 col-sm-12 contact-section__detail">
        <b-button class="contact-section__detail__icon"
          ><font-awesome-icon icon="fa-solid fa-envelope" />
        </b-button>
        <label>Email: <b>bstharun@gmail.com</b></label>
      </div>
    </div>

    <div class="col-md-6 col-sm-12 message-section">
      <h3 class="message-section__title">Send Us Message</h3>
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
        <div class="d-flex justify-content-center">
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
@import '../assets/_general.scss';
.contact-container {
  height: 100%;
  padding-top: 6rem;
  overflow-y: auto;
  .contact-section {
    position: relative;
    margin: auto;
    display: flex;
    flex-wrap: wrap;

    &__detail {
      text-align: center;
      &__icon {
        pointer-events: none;
        background-color: #2b7a78;
        width: 55px;
        height: 55px;
        border-radius: 50%;
      }
      label {
        display: block;
        padding-top: 0.5rem;
        padding-bottom: 1.5rem;
      }
    }
  }
  .message-section {
    position: relative;
    margin: auto;
    padding-bottom: 2rem;
    &__title {
      font-size: 2rem;
      font-weight: 500;
      color: #3b945e;
      text-align: center;
    }
  }
}

</style>
