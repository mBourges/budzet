<template>
  <v-container>
    <v-layout row wrap>
      <v-flex xs12>
        <h1 class="display-1 secondary--text">
          <div>
            <p>Profile</p>
          </div>
        </h1>
      </v-flex>
      <v-flex>
        <v-avatar size="128" tile class="indigo">
          <img
            :src="user.photoURL"
            alt="User Photo"
            v-if="user.photoURL"
          >
          <v-icon v-else>person</v-icon>
        </v-avatar>
      </v-flex>
      <v-flex>
        <div class="px-2">
          uid: {{ user.uid }}<br />
          displayName: {{ user.displayName }} <br/>
          email: {{ user.email }} ({{ user.emailVerified ? 'Verified' : 'Unverified'}}) <br/>
          phoneNumber: {{ user.phoneNumber }}<br />
          metadata: {{ user.metadata }}
        </div>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
  export default {
    name: 'user-profile',
    computed: {
      user() {
        const { user } = this.$store.state.user;
        return user;
      }
    }
  };
</script>
