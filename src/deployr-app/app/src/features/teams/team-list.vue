<template>
  <div>
    <div class="row has-margin-bottom-4">
      <div class="columns">
        <div class="column">
          <h1 class="title">Teams</h1>
        </div>
        <div class="column is-narrow">
          <div class="field has-addons">
          <div class="control">
            <input class="input" type="search" placeholder="Filter...">
          </div>
          <div class="control">
            <a class="button is-light">
              <span class="icon is-small">
                <svg class="svg-inline--fa fa-search fa-w-16" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="search" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" data-fa-i2svg=""><path fill="currentColor" d="M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z"></path></svg><!-- <i class="fas fa-search"></i> -->
              </span>
            </a>
          </div>
        </div>
        </div>
      </div>
    </div>
    
    
    <div class="row has-margin-bottom-4">
      <div class="columns is-gapless">
        <div class="column">
          <router-link :to="{ name: 'team-creation' }" class="button is-text is-paddingless">Create new team</router-link>
        </div>
      </div>
    </div>

    <div class="team-list">
      <nested-list v-for="team in teams" :key="team.name" :item="team" :nodes="team.teams" :depth="0" key-prop="name" child-prop="teams">
        <template slot-scope="{ item, onToggle }">
          <div class="columns is-vcentered">
            <div class="column">
              <h2><router-link :to="{ path: `${item.slug}`, }" class="is-text is-white">{{ item.name }}</router-link></h2>
            </div>
            <div class="column is-narrow">
              <span class="is-size-7">{{ item.members }} members</span>
            </div>
            <div class="column is-narrow">
              <a class="is-size-7" :style="{ 'padding-right': item.teams.length < 1 ? '21px' : '' }" @click="() => { teamCount(item) > 0 ? onToggle() : null }">{{ teamCount(item) }} teams 
                <b-icon pack="fas" v-if="item.teams.length > 0" icon="angle-down" type="is-primary"></b-icon>
              </a>
            </div>
          </div>
        </template>
      </nested-list>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import { slugify } from '@/utilities/string';
import { Team } from './team';
import { namespace } from 'vuex-class';
import NestedList from '@/components/nested-list/nested-list.vue';

const teamModule = namespace('team');

@Component({
  components: {
    NestedList,
  },
})
export default class Projects extends Vue {
  @teamModule.Getter public teams!: Array<Team>;

  public slugify(value: string): string {
    return slugify(value);
  }
  private teamCount(team: Team): number {
    const flatten = (teams: Array<Team>): Array<Team> => {
      const x = teams.reduce((acc, val) => {
        return acc.concat(flatten(val.teams));
      // tslint:disable-next-line:align
      }, [ ...teams ]);

      return x;
    };

    const result = flatten(team.teams);
    return result.length;
  }
}
</script>
