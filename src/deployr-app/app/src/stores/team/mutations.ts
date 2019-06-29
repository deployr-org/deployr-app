import { Mutation, MutationTree } from 'vuex';
import { State } from './state';

export class Mutations implements MutationTree<State> {
  [key: string]: Mutation<State>;
}
