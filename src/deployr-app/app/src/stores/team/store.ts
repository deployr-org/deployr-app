import { Module } from 'vuex';
import { State } from './state';
import { RootState } from '../state';
import { Actions } from './actions';
import { Getters } from './getters';
import { Mutations } from './mutations';

export class TeamStore implements Module<State, RootState> {
  public namespaced: boolean = true;
  public state: State = new State();
  public actions: Actions = new Actions();
  public getters: Getters = new Getters();
  public mutations: Mutations = new Mutations();
}
