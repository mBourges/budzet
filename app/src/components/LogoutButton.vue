<template>
  <button class="button" @click="logout">
    <span class="icon button-icon">
      <i class="fa fa-sign-out" aria-hidden="true"></i>
    </span>
    <span>Logout</span>
  </button>
</template>

<script>
  import { auth } from '@/lib/firebase';

  export default {
    name: 'logout-button',
    methods: {
      logout() {
        auth.signOut()
          .then(() => this.$router.replace('login'));
      }
    }
  };
</script>
