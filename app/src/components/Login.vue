<template>
  <v-app>
    <v-content>
      <v-container fluid fill-height>
        <v-layout align-center justify-center>
          <v-flex xs12 sm8 md4>
            <v-card class="elevation-12">
              <v-toolbar dark color="primary">
                <v-toolbar-title>Login form</v-toolbar-title>
                <v-spacer></v-spacer>
              </v-toolbar>
              <v-form @submit.prevent="login">
                <v-card-text>
                  <v-text-field v-model="email" :rules="emailRules" autofocus required prepend-icon="person" name="email" label="Email" type="email"></v-text-field>
                  <v-text-field v-model="password" required prepend-icon="lock" name="password" label="Password" id="password" type="password"></v-text-field>
                </v-card-text>
                <v-card-actions>
                  <p>
                    You don't have an account?<br />
                    <router-link to="/sign-up">Create a new one.</router-link>
                  </p>
                  <v-spacer></v-spacer>
                  <v-btn color="primary" :disabled="isProcessing" :loading="isProcessing" type="submit">Login</v-btn>
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
    name: 'login',
    data() {
      return {
        email: '',
        password: '',
        isProcessing: false,
        errorMessage: null,
        emailRules: [
          v => !!v || 'E-mail is required',
          v => /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(v) || 'E-mail must be valid'
        ]
      };
    },
    computed: {
      redirection() {
        return this.$route.query.redirect || '/';
      },
      hasError() {
        return !!this.errorMessage;
      }
    },
    methods: {
      closeNotification() {
        this.errorMessage = null;
      },
      login() {
        this.isProcessing = true;
        this.errorMessage = null;

        auth.signInWithEmailAndPassword(this.email, this.password)
          .then(this.onLoginSuccess, this.onLoginError);
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
