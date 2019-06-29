<template>
   <div class="has-margin-6">
    <div class="row has-margin-bottom-4">
      <div class="columns">
        <div class="column">
          <h1 class="title">Create new team</h1>
        </div>
      </div>
    </div>

    <div class="row">
      <div class="column is-half is-offset-one-quarter">
        <div class="box team-creation">
          <div class="field">
            <label class="label">Team name</label>
            <div class="control">
              <input class="input" type="text" placeholder="Name">
            </div>
            <!-- <p class="help">This is a help text</p> -->
          </div>

          <div class="field">
            <label class="label">Description</label>
            <div class="control">
              <input class="input" type="text" placeholder="Description">
            </div>
            <!-- <p class="help">This is a help text</p> -->
          </div>

          <div class="field has-margin-bottom-6">
            <label class="label">Parent team</label>
            <div class="control">
              <div class="select">
                <select>
                  <option :value="null">None</option>
                  <option v-for="team in teams" :key="team.name">{{ team.name }}</option>
                </select>
              </div>
            </div>
          </div>

          <div class="field is-grouped">
            <div class="control">
              <button class="button is-primary">Create team</button>
            </div>
            <div class="control">
              <button class="button is-text">Cancel</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import { namespace } from 'vuex-class';
import { Team } from '@/features/teams/team';

const module = namespace('team');

@Component
export default class TeamCreation extends Vue {
  @module.Getter('flattenedTeams') public teams!: Array<Team>;
}
</script>
