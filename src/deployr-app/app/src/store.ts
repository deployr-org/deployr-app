import Vue from 'vue';
import Vuex from 'vuex';
import { RootState } from './stores/state';
import { TeamStore } from './stores/team/store';

Vue.use(Vuex);

export default new Vuex.Store<RootState>({
  modules: {
    team: new TeamStore(),
  },
});
