<template>
  <button class="button is-primary is-small" @click="handleClick">
    <span class="icon is-small">
      <i :class="iconClass"></i>
    </span>
  </button>
</template>

<script>
  export default {
    name: 'icon-button',
    props: [ 'icon' ],
    computed: {
      iconClass() {
        return [ 'fa', `fa-${this.icon}` ];
      }
    },
    methods: {
      handleClick() {
        this.$emit('click');
      }
    }
  };
</script>

<style scoped>

</style>