<template>
  <div>
    <b-modal :hide-header-close="true" :no-close-on-backdrop="true" class="error-modal" title="Application error" v-model="showModal">
      <p v-for="(data, index) in customErrorViewModal" :key="index">{{ data.message }}</p>
      <div slot="modal-footer">
        <b-button @click="close" id="customErrorModalOk" variant="primary">Ok</b-button>
      </div>
    </b-modal>
  </div>
</template>
<script lang="ts">
// Libraries
import { Component } from 'nuxt-property-decorator';
// View Models
// Components
import { IErrorViewModel } from '@/view-models';
import BaseComponent from '@/shared/BaseComponent';
import EventBus from '@/shared/event-bus';
// Services
@Component({
  name: 'error-modal'
})
export default class ErrorModal extends BaseComponent {
  // VUE.JS Props
  // VUEX
  // Properties
  public showModal: boolean = false;
  public customErrorViewModal:Array<IErrorViewModel> = [];
  // Fields
  // Getters
  // Lifecycle Handlers
  // beforeCreate(): void {}
  // beforeMount(): void {}
  public created(): void {
    EventBus.$on('error-modal::show', (data: IErrorViewModel) => {
     this.customErrorViewModal.push(data);
     this.showModal = true;
    });
  }
  // mounted(): void {}
  // beforeUpdate(): void {}
  // updated(): void {}
  // beforeDestroy(): void {}
  // destroyed(): void {}
  // Private Methods
  // Helper Methods
  // Event Methods
  public close(event: Event): void {
    event.preventDefault();
    this.customErrorViewModal = [];
    this.showModal = false;
  }
  // Watchers
  // Emitters
}
</script>
<style lang="scss" scoped>
.error-modal {
  &__error-message {
    word-break: break-word;
  }
}
</style>
