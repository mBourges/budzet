<template>
  <v-app>
    <app-header @toggle-nav-drawer="drawer = !drawer" />
    <v-navigation-drawer
      fixed
      :clipped="$vuetify.breakpoint.mdAndUp"
      app
      v-model="drawer"
    >
      <nav-menu />
    </v-navigation-drawer>
    <v-content>
      <router-view></router-view>
    </v-content>
  </v-app>
</template>

<script>
  import AppHeader from './AppHeader';
  import NavMenu from './Menu';

  export default {
    name: 'shell',
    components: { AppHeader, NavMenu },
    data() {
      return {
        drawer: null
      };
    }
  };
</script>
