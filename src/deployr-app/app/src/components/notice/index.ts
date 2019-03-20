import Vue, { VueConstructor, PluginObject } from 'vue';
import Notice from './notice.vue';
import Methods from './notice-method';

const plugin = {
  install: (vue: typeof Vue): void => {
    Vue.component('notice', Notice);
    Vue.prototype.$notice = Methods;
  },
};

declare module 'vue/types/vue' {
  interface Vue {
      $notice: typeof Methods;
  }
}

export default plugin;
