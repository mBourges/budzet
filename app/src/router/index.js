import Vue from 'vue';
import Router from 'vue-router';
import { auth } from '@/lib/firebase';

import Shell from '@/components/Shell';
import Login from '@/components/Login';
import SignUp from '@/components/SignUp';
import NotFound from '@/components/NotFound';

Vue.use(Router);

const router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/login',
      name: 'Login',
      component: Login
    }, {
      path: '/sign-up',
      name: 'SignUp',
      component: SignUp
    }, {
      path: '/',
      component: Shell,
      meta: {
        requiresAuth: true
      },
      children: [
        {
          path: '',
          name: 'Home',
          component: () => import('@/components/Home')
        }, {
          path: 'accounts',
          name: 'Accounts',
          component: () => import('@/components/Accounts')
        }, {
          path: 'profile',
          name: 'profile',
          component: () => import('@/components/Profile')
        }, {
          path: '*',
          name: 'AppNotFound',
          component: NotFound
        }
      ]
    }
  ]
});

router.beforeEach((to, from, next) => {
  let currentUser = auth.currentUser;
  let requiresAuth = to.matched.some(path => path.meta.requiresAuth);

  if (requiresAuth && !currentUser) {
    next({ name: 'Login', query: { redirect: to.fullPath } });
  } else {
    next();
  }
});

export default router;
