import Vue from 'vue';
import Vuex from 'vuex';
import Vuetify from 'vuetify';
import App from './App';
import router from './router';
import { auth } from './lib/firebase';
import storeInformation from './store';

import 'vuetify/dist/vuetify.min.css';
import colors from 'vuetify/es5/util/colors';

Vue.config.productionTip = process.env.NODE_ENV === 'production';

Vue.use(Vuex);
Vue.use(Vuetify, {
  theme: {
    primary: colors.green.base,
    secondary: colors.green.lighten1,
    accent: colors.amber.base,
    error: colors.red.accent3
  }
});

let app;
const store = new Vuex.Store(storeInformation);

auth.onAuthStateChanged(user => {
  if (user) {
    store.commit('user/setUser', user);
  } else {
    store.commit('clearUser');
  }

  if (!app) {
    /* eslint-disable no-new */
    app = new Vue({
      el: '#app',
      router,
      store,
      render: h => h(App)
    });
  }
});
