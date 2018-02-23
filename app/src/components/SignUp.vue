<template>
  <div class="sign-up">
    <transition name="fade">
      <p v-if="hasError" class="notification is-danger top-notification">
        <span class="icon">
          <i class="fa fa-exclamation-triangle"></i>
        </span>
        {{ errorMessage }}
      </p>
    </transition>
    <div class="box">
      <form @submit.prevent="signUp">
        <h3 class="title">Let's create a new account!</h3>
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
          <button :disabled="isProcessing" :class="buttonClass" type="submit">sign up</button>
        </div>
        <p class="is-size-7">or go back to <router-link to="/login">login</router-link>.</p>
      </form>
    </div>
  </div>
</template>

<script>
  import { auth } from '@/lib/firebase';

  export default {
    name: 'signUp',
    data() {
      return {
        email: '',
        password: '',
        isProcessing: false,
        errorMessage: null
      };
    },
    computed: {
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
      signUp() {
        this.isProcessing = true;
        this.errorMessage = null;

        setTimeout(() => {
          auth.createUserWithEmailAndPassword(this.email, this.password)
            .then(this.onSignUpSuccess, this.onSignUpError);
        }, 250);
      },
      onSignUpSuccess(user) {
        this.$router.replace('/');
      },
      onSignUpError({ message }) {
        this.isProcessing = false;
        this.errorMessage = message;
      }
    }
  };
</script>

<style scoped>
  .sign-up {
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
