<template>
  <nav class="navbar" role="navigation" aria-label="main navigation">
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
          <a class="navbar-item">
            Link
          </a>
        </div>

        <div class="navbar-end">
          <a class="navbar-item">
            <logout-button />
          </a>
        </div>
      </div>
    </div>
  </nav>
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
      navBarMenuClass() {
        return {
          'navbar-menu': true,
          'is-active': this.isOpen
        };
      }
    },
    methods: {
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
