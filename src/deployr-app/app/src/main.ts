import Vue from 'vue';
import App from '@/App.vue';
import router from '@/router';
import store from '@/store';
import Buefy from 'buefy';
import { slugify } from '@/utilities/string';
import '@/scss/app.scss';

Vue.config.productionTip = false;
Vue.filter('slugify', slugify);
Vue.use(Buefy);

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
