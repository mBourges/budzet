<template>
  <div class="login">
    <transition name="fade">
      <p v-if="hasError" class="notification is-danger top-notification">
        <span class="icon">
          <i class="fa fa-exclamation-triangle"></i>
        </span>
        {{ errorMessage }}
      </p>
    </transition>
    <div class="box">
      <form @submit.prevent="login">
        <h3 class="title">Sign In</h3>
        <div class="field">
          <div class="control">
            <input class="input" type="text" v-model="email" placeholder="username">
          </div>
        </div>
        <div class="field">
          <div class="control">
            <input class="input" type="password" v-model="password" placeholder="password">
          </div>
        </div>
        <div class="buttons is-centered">
          <button :disabled="isProcessing" :class="buttonClass" type="submit">sign in</button>
        </div>
        <p class="is-size-7">You don't have an account? <router-link to="/sign-up">Create a new one.</router-link></p>
      </form>
    </div>
  </div>
</template>

<script>
  import { auth } from '@/lib/firebase';

  export default {
    name: 'login',
    data() {
      return {
        email: '',
        password: '',
        isProcessing: false,
        errorMessage: null
      };
    },
    computed: {
      redirection() {
        return this.$route.query.redirect || '/';
      },
      buttonClass() {
        return {
          button: true,
          'is-primary': true,
          'is-loading': this.isProcessing
        };
      },
      hasError() {
        return !!this.errorMessage;
      }
    },
    methods: {
      login() {
        this.isProcessing = true;
        this.errorMessage = null;

        setTimeout(() => {
          auth.signInWithEmailAndPassword(this.email, this.password)
            .then(this.onLoginSuccess, this.onLoginError);
        }, 250);
      },
      onLoginSuccess(user) {
        this.$router.replace(this.redirection);
      },
      onLoginError({ message }) {
        this.isProcessing = false;
        this.errorMessage = message;
      }
    }
  };
</script>

<style scoped>
  .login {
    display: flex;
    flex-direction: column;
    height: 100%;
    padding: 4rem;
    justify-content: center;
    align-items: center;
  }

  .top-notification {
    position: fixed;
    top: 0;
  }

  .fade-enter-active, .fade-leave-active {
    transition-duration: 250ms;
    transition-timing-function: ease-out;
    transform: translate3d(0, 0, 0);
  }

  .fade-enter, .fade-leave-to {
    transform: translate3d(0, -100%, 0);
  }
</style>
