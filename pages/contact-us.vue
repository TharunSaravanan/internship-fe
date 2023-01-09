<template>
<div class="about-container mx-0">
    <div class="col-md-5 col-sm-12 about-container__img-section px-0">
      <div class="col-md-8 d-flex col-sm-12 image-block">
        <div class="about-container__img-section__img-wrapper">
          <img
            class="about-container__img-section__img-photo"
            src="../assets/NiceJob.png"
          />
          <h3>Student Internships</h3>
        </div>
      </div>
    </div>
    <div
      class="
        col-sm-12 col-md-7
        about-container__description-section
        text-bg-color
      "
    >
      <div class="about-container__description-section__wrapper">
        <span class="d-block">We need your help!</span>
        <p>
          We want to make <b>Student Internships</b> a global community to help students with the process of
          finding internship opportunities and bodies of knowledge about variuos professions in their respective locations. 
          <br> </br>
          If you think you could help with achieving our goal, the best way is to find internship opportunities that you want on this website and send them to us.
          <br> </br>
          If you are intersted in contributing, please send an email to <b>studentinternships.info@gmail.com</b>, and 
          please send you feedback/suggestions/feature requests for this website to the same email address.
        </p>

      </div>
    </div>
  </div>

<!--
    <div class="col-md-8 contact-section">
       <h3 class="contact-section__title">Contact Us</h3> 
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
      <h3 class="message-section__title">Send Us Feedback</h3>
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
  -->
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
  padding-top: 2rem;
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

.about-container {
  height: 100%;
 // padding-top: 2.5rem;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  overflow-y: auto;
  &__img-section {
    text-align: center;
    display: flex;
    justify-content: flex-end;
    padding: 4rem 0;
    @media only screen and (max-width: 768px) {
      padding: 0;
    }
    &__img-wrapper {
      position: relative;
      margin: auto;
      h3 {
        font-weight: 600;
        font-size: 2.25rem;
        color: #def2f1;
      }
    }
    &__img-photo {
      border-radius: 50%;
      width: 85%;
    }
    .image-block {
      @media only screen and (max-width: 768px) {
        max-width: 100%;
        padding-top: 2rem;
      }
      background-color: #3aafa9;
      margin-left: 0;
      margin-right: 0;
      max-width: 65%;
      @media only screen and (max-width: 1100px) and (min-width: 768px) {
        flex: 0 0 80%;
        max-width: 80%;
      }
    }
  }
  &__description-section {
    background-color: #def2f1;
    padding-top: 2rem;
    text-align: center;
    display: flex;
    &__wrapper {
      position: relative;
      margin: auto;
      font-size: 2.5rem;
      font-weight: 400;
      color: #3b945e;
      .main-title {
        font-weight: 300;
      }
      p {
        margin-top: 1.5rem;
        font-size: 1.25rem;
        font-weight: 400;
        color: #2b7a78;
      }
      .icon {
        margin: 1rem;
        color: white;
        &:hover {
          opacity: 0.7;
        }
        &__linkedin {
          background: #007bb5;
          border: 1px solid #007bb5;
        }
        &__facebook {
          background: #3b5998;
          border: 1px solid #3b5998;
        }

        &__twitter {
          background: #55acee;
          border: 1px solid #55acee;
        }
      }
    }
  }
}

</style>
