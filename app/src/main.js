import Vue from 'vue';
import App from './App';
import router from './router';
import { auth } from './lib/firebase';

import 'bulma/css/bulma.css';
import 'font-awesome/css/font-awesome.min.css';

Vue.config.productionTip = process.env.NODE_ENV === 'production';

let app;

auth.onAuthStateChanged(user => {
  if (!app) {
    /* eslint-disable no-new */
    app = new Vue({
      el: '#app',
      router,
      render: h => h(App)
    });
  }
});
