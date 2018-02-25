<template>
  <v-app>
    <v-content>
      <v-container fluid fill-height>
        <v-layout align-center justify-center>
          <v-flex xs12 sm8 md4>
            <v-card class="elevation-12">
              <v-toolbar dark color="primary">
                <v-toolbar-title>Signup form</v-toolbar-title>
              </v-toolbar>
              <v-form @submit.prevent="signup">
                <v-card-text>
                  <v-text-field v-model="email" :rules="emailRules" autofocus required prepend-icon="person" name="email" label="Email" type="email"></v-text-field>
                  <v-text-field v-model="password" :rules="passwordRules" required prepend-icon="lock" name="password" label="Password" id="password" type="password"></v-text-field>
                </v-card-text>
                <v-card-actions>
                  <p>
                    Go back to <router-link to="/login">login</router-link>.
                  </p>
                  <v-spacer></v-spacer>
                  <v-btn color="primary" :disabled="isProcessing" :loading="isProcessing" type="submit">Signup</v-btn>
                </v-card-actions>
              </v-form>
            </v-card>
          </v-flex>
        </v-layout>
      </v-container>
    </v-content>
    <v-snackbar top right :value="hasError" @input="closeNotification">
      {{ errorMessage }}
      <v-btn flat color="pink" @click="closeNotification">Close</v-btn>
    </v-snackbar>
  </v-app>
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
        errorMessage: null,
        emailRules: [
          v => !!v || 'E-mail is required',
          v => /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(v) || 'E-mail must be valid'
        ],
        passwordRules: [
          v => !!v || 'Password is required'
        ]
      };
    },
    computed: {
      hasError() {
        return !!this.errorMessage;
      }
    },
    methods: {
      closeNotification() {
        this.errorMessage = null;
      },
      signup() {
        this.isProcessing = true;
        this.errorMessage = null;

        auth.createUserWithEmailAndPassword(this.email, this.password)
          .then(this.onSignupSuccess, this.onSignupError);
      },
      onSignupSuccess(user) {
        this.$router.replace('/');
      },
      onSignupError({ message }) {
        this.isProcessing = false;
        this.errorMessage = message;
      }
    }
  };
</script>

<style scoped>
  /* .sign-up {
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
  } */
</style>
