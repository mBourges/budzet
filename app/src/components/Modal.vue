<template>
  <div :class="modalClass">
    <transition name="fade">
      <div v-if="isOpen" class="modal-background"></div>
    </transition>
    <transition name="fade">
      <div v-if="isOpen">
        <slot />
      </div>
    </transition>
  </div>
</template>

<script>
  export default {
    name: 'add-account-form',
    props: [ 'isOpen' ],
    data() {
      return {
        modalClass: {
          modal: true
        }
      };
    },
    watch: {
      isOpen(newVal, oldVal) {
        if (!oldVal) {
          this.modalClass = {
            modal: true,
            'is-active': true
          };
        } else {
          setTimeout(() => {
            this.modalClass = {
              modal: true,
              'is-active': false
            };
          }, 250);
        }
      }
    }
  };
</script>

<style scoped>
  .fade-enter-active, .fade-leave-active {
    transition: opacity 250ms ease-out;
  }

  .fade-enter, .fade-leave-to {
    opacity: 0;
  }
</style>
