import { Team } from '@/features/teams/team';
import { GetterTree, Getter } from 'vuex';
import { State } from './state';
import { RootState } from '../state';

function flatten(teams: Array<Team>): Array<Team> {
  const result = teams.reduce((acc, val) => {
    return acc.concat(flatten(val.teams));
  // tslint:disable-next-line:align
  }, [ ...teams ]);

  return result;
}

export class Getters implements GetterTree<State, RootState>  {
  [key: string]: Getter<State, RootState>;

  public teams = (state: State): Array<Team> => {
    return state.teams;
  }
  public flattenedTeams = (state: State): Array<Team> => {
    return flatten(state.teams);
  }

  public teamBySlug = (state: State) => (slug: string): Team | null => {
    return flatten(state.teams).find((t) => t.slug === slug) || null;
  }
}
