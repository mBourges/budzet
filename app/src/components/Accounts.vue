<template>
  <v-container fluid grid-list-xl>
    <v-layout row justify-space-between>
      <v-flex xs4>
        <v-list subheader>
          <v-subheader>Accounts</v-subheader>
          <!-- <v-list-tile avatar v-for="item in items" :key="item.title" @click="">
            <v-list-tile-avatar>
              <img :src="item.avatar">
            </v-list-tile-avatar>
            <v-list-tile-content>
              <v-list-tile-title v-html="item.title"></v-list-tile-title>
            </v-list-tile-content>
            <v-list-tile-action>
              <v-icon :color="item.active ? 'teal' : 'grey'">chat_bubble</v-icon>
            </v-list-tile-action>
          </v-list-tile> -->
        </v-list>
        <v-divider></v-divider>
        <v-list subheader>
          <v-subheader>Insurrances</v-subheader>
        </v-list>
      </v-flex>
    </v-layout>
  </v-container>
  <!-- <section class="container">
    <div class="box">
      <div class="columns">
        <div class="column is-one-third">
          <nav class="panel">
            <p class="panel-heading with-right-button">
              Accounts
              <icon-button icon="plus" @click="handleAddAccount" />
            </p>
            <a class="panel-block is-active">
              <span class="panel-icon">
                <i class="fa fa-book"></i>
              </span>
              bulma
            </a>
            <a class="panel-block">
              <span class="panel-icon">
                <i class="fa fa-book"></i>
              </span>
              bulma
            </a>
            <a class="panel-block">
              <span class="panel-icon">
                <i class="fa fa-book"></i>
              </span>
              bulma
            </a>
          </nav>
        </div>
        <div class="column"></div>
      </div>
    </div>
    <AddAccountForm
      :isOpen="isAddAccountFormOpen"
      @cancel="closeAddAccountForm"
    />
  </section> -->
</template>

<script>
  import IconButton from './IconButton';
  import AddAccountForm from './AddAccountForm';

  export default {
    name: 'accounts',
    components: { IconButton, AddAccountForm },
    data() {
      return {
        isAddAccountFormOpen: false
      };
    },
    methods: {
      handleAddAccount() {
        this.isAddAccountFormOpen = true;
      },
      closeAddAccountForm() {
        this.isAddAccountFormOpen = false;
      }
    }
  };
</script>

<style scoped>
  .with-right-button {
    display: flex;
    justify-content: space-between;
  }
</style>
