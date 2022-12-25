<template>
  <div class="parent-container row d-flex justify-content-center">
    <div class="col-md-4 col-sm-12 img-container">
      <img class="img-avatar" src="../assets/tharun.jpg" />
      <div class="name-container">
        <span> Tharun</span>
        <span> Saravanan</span>
      </div>
    </div>
    <div class="col-sm-12 col-md-4">
      <h1>Hello!</h1>
      <h3 class="about-me-title">A Bit About Me</h3>
      <p>
        Hi, I’m Tharun, a Junior at Andover High School in Kansas. When I was a sophomore, I was looking for an internship to get some experience in how the Computer Science industry works, but I was struggling to find one. That is why I founded <b>Student Internships </b> to try to ensure that students won’t have to face the issues I was facing in search of an internship. 
      </p>
      <br/>
      <p>
        With <b>Student Internships </b>, my goal is to help high school students to find internship opportunities, explore various professions and build a community of knowledge. A little bit more about me: I love computer science, I love math, and I also love physics.
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
