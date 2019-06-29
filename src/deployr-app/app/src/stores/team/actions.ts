import { ActionTree, Action } from 'vuex';
import { State } from './state';
import { RootState } from '../state';

export class Actions implements ActionTree<State, RootState> {
  [key: string]: Action<State, RootState>;
}
