<template>
  <div>
    <div class="row has-margin-bottom-4">
      <div class="columns">
        <div class="column">
          <h1 class="title">Team details</h1>
        </div>
      </div>
    </div>

    <div class="row">
      <div class="columns">
        <div class="column is-narrow is-2">      
          <div class="menu">
            <ul class="menu-list">
              <li><router-link class="menu-item" :to="{ name: 'team-users' }" exact>Users</router-link></li>
              <li><router-link class="menu-item" :to="{ name: 'team-projects' }" exact>Projects</router-link></li>
              <li><router-link class="menu-item" :to="{ name: 'team-notifications' }" exact>Notifications</router-link></li>
              <li><router-link class="menu-item" :to="{ name: 'team-settings' }" exact>Settings</router-link></li>
            </ul>
          </div>

        </div>
        <div class="column">
          <router-view />
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class TeamDetails extends Vue {
}
</script>
