<template>
  <div class="shell">
    <app-header />
    <router-view></router-view>

  </div>
</template>

<script>
  import AppHeader from './AppHeader';

  export default {
    name: 'shell',
    components: { AppHeader }
  };
</script>
