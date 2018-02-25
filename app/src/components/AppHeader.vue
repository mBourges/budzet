<template>
  <v-toolbar color="primary" dark fixed app :clipped-left="$vuetify.breakpoint.mdAndUp">
    <v-toolbar-side-icon @click.stop="toggleNavDrawer"></v-toolbar-side-icon>
    <v-toolbar-title>Budzet</v-toolbar-title>
    <v-spacer></v-spacer>
    <v-toolbar-items class="hidden-sm-and-down">
      <v-btn flat to="profile">
        <v-avatar class="mr-3" size="32">
          <img :src="userPhoto" alt="John">
        </v-avatar>
        {{ username }}
      </v-btn>
    </v-toolbar-items>
    <logout-button />
  </v-toolbar>
  <!-- <nav class="navbar" role="navigation" aria-label="main navigation">
    <div class="container">
      <div class="navbar-brand">
        <router-link to="/" class="navbar-item">
          <span @click="handleLogoClick">
            <img src="https://bulma.io/images/bulma-logo.png" alt="Bulma: a modern CSS framework based on Flexbox" width="112" height="28">
          </span>
        </router-link>

        <div class="navbar-burger" @click.prevent="toggleMenu">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>

      <div :class="navBarMenuClass">
        <div class="navbar-start">
          <div class="navbar-tabs">
            <router-link to="accounts" class="navbar-item is-tab" active-class="is-active">
              Accounts
            </router-link>
          </div>
        </div>

        <div class="navbar-end">
          <a class="navbar-item">
            <logout-button />
          </a>
        </div>
      </div>
    </div>
  </nav> -->
</template>

<script>
  import LogoutButton from './LogoutButton';

  export default {
    name: 'app-header',
    components: { LogoutButton },
    mounted() {
      this.isFixed = false;
      window.addEventListener('scroll', this.handleScroll);
    },
    destroyed() {
      window.removeEventListener('scroll', this.handleScroll);
    },
    data() {
      return {
        isOpen: false
      };
    },
    computed: {
      username() {
        return this.$store.getters['user/username'];
      },
      userPhoto() {
        return this.$store.getters['user/photoUrl'];
      },
      navBarMenuClass() {
        return {
          'navbar-menu': true,
          'is-active': this.isOpen
        };
      }
    },
    methods: {
      toggleNavDrawer() {
        this.$emit('toggle-nav-drawer');
      },
      toggleMenu() {
        this.isOpen = !this.isOpen;
      },
      handleLogoClick() {
        if (this.isOpen) {
          this.toggleMenu();
        }
      },
      handleScroll(event) {
        if (!this.isFixed && this.isNavBarOffScreen()) {
          this.toggleFixedNavBar(true);
        }

        if (this.isFixed && this.isScrollReset()) {
          this.toggleFixedNavBar(false);
        }
      },
      isNavBarOffScreen() {
        return window.window.scrollY >= this.$el.offsetHeight;
      },
      isScrollReset() {
        return window.window.scrollY === 0;
      },
      toggleFixedNavBar(shouldToggle) {
        if (shouldToggle) {
          this.$el.classList.add('is-fixed-top');
        } else {
          this.$el.classList.remove('is-fixed-top');
        }

        this.isFixed = shouldToggle;
      }
    }
  };
</script>
