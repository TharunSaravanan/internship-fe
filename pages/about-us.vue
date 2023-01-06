<template>
  <div class="about-container mx-0">
    <div class="col-md-5 col-sm-12 about-container__img-section px-0">
      <div class="col-md-8 d-flex col-sm-12 image-block">
        <div class="about-container__img-section__img-wrapper">
          <img
            class="about-container__img-section__img-photo"
            src="../assets/tharun.jpg"
          />
          <h3>Tharun Saravanan</h3>
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
        <span class="main-title">Hello!</span>
        <span class="d-block">A Bit About Me</span>
        <p>
          Hi, I’m Tharun, a Junior at Andover High School in Kansas. When I was
          a sophomore, I was looking for an internship to get some experience in
          how the Computer Science industry works, but I was struggling to find
          one. That is why I founded <b>Student Internships </b> to try to
          ensure that students won’t have to face the issues I was facing in
          search of an internship.
          <br />
          <br />
          With <b>Student Internships</b>, my goal is to help high school
          students to find internship opportunities, explore various professions
          and build a community of knowledge. A little bit more about me: I love
          computer science, math, and physics.
        </p>
        <div class="d-flex justify-content-center mt-4">
          <b-button class="icon icon__facebook"
            ><font-awesome-icon icon="fab fa-facebook-f" />
          </b-button>
          <b-button class="icon icon__twitter"
            ><font-awesome-icon icon="fab fa-twitter" />
          </b-button>
          <b-button class="icon icon__linkedin" @click="navigateToLinkedIn()"
            ><font-awesome-icon icon="fab fa-linkedin" />
          </b-button>
        </div>
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
  private navigateToLinkedIn(): void {
    window.open('https://www.linkedin.com/in/tharun-saravanan', '_blank')
  }
  // Helper Methods
  // Event Methods
  // Watchers
  // Emitters
}
</script>
<style lang="scss" scoped>
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
