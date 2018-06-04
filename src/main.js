// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import axios from 'axios';
import VueAxios from 'vue-axios';
import Vuetify from 'vuetify';
import 'vuetify/dist/vuetify.min.css';
import router from './router';

Vue.use(Vuetify, {
  theme: {
    primary: '#BA0F2B',
    secondary: '#424242',
    accent: '#82B1FF',
    error: '#FF5252',
    info: '#2196F3',
    success: '#4CAF50',
    warning: '#FFC107',
  },
});

Vue.use(VueAxios, axios);

Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  router,
}).$mount('#app');
