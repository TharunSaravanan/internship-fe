<template>
  <div id="app" class="blank-layout">
      <nuxt />
  </div>
</template>

<script lang="ts">
// Libraries
import { Component } from 'nuxt-property-decorator';
// View Models
// Components
import BaseComponent from '@/shared/BaseComponent';
// Stores


@Component({
  components: {
  },
  name: 'blank-layout'
})
export default class BlankLayout extends BaseComponent {
  // VUE.JS Props
  // VUEX
  // Properties
  // Getters
  // Lifecycle Handlers
  // beforeCreate(): void {}
  // created(): void {}
  // beforeMount(): void {}
  // beforeUpdate(): void {}
  // updated(): void {}
  // beforeDestroy(): void {}
  // destroyed(): void {}
  // Private Methods
  // Helper Methods
  // Event Methods
  // Watchers
  // Emitters
}
</script>
<style lang="scss" scoped>

.blank-layout {
}
</style>
