<template>
  <div class="flex">
    <h1>Something went wrong, please try again later!</h1>
    <h3>Error:  {{ error.message }}</h3>
    <h3>Go back to <a href="/">Home</a> </h3>
  </div>
</template>
<script lang="ts">
// Libraries
import { Component, Prop } from 'nuxt-property-decorator';
// View Models
// Components
import BaseComponent from '@/shared/BaseComponent';
// Services
import { NuxtError } from '@nuxt/types';

@Component({
name: 'error'
})
export default class ErrorLayout extends BaseComponent {
    @Prop({ type: Object, required: true })
    public readonly error!: NuxtError;
// VUE.JS Props
// VUEX
// Properties
// Fields
// Getters
// Lifecycle Handlers
// private beforeCreate(): void {}
// private created(): void {}
// private beforeMount(): void {}
// private mounted(): void {}
// private beforeUpdate(): void {}
// private updated(): void {}
// private beforeDestroy(): void {}
// private destroyed(): void {}
// Private Methods
// Helper Methods
// Event Methods
// Watchers
// Emitters
}
</script>
<style lang="scss" scoped>
.flex {
  margin-top: 5rem;
  text-align: center;
}
</style>
