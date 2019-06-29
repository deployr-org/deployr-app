<template>
  
    

    <!-- <div class="row"> -->
      <div class="columns is-fullheight is-gapless">
        <project-sidebar class="sub-menu" />
        <!-- <div class="column is-narrow is-2">      
          <div class="menu">
            <ul class="menu-list">
              <li><router-link class="menu-item" :to="{ name: 'project-deployments' }" exact>Deployments</router-link></li>
              <li><router-link class="menu-item" :to="{ name: 'project-teams' }" exact>Teams</router-link></li>
              <li><router-link class="menu-item" :to="{ name: 'project-users' }" exact>Users</router-link></li>
              <li><router-link class="menu-item" :to="{ name: 'project-notifications' }" exact>Notifications</router-link></li>
              <li><router-link class="menu-item" :to="{ name: 'project-settings' }" exact>Settings</router-link></li>
            </ul>
          </div>

        </div> -->
        <div class="column has-margin-6">
          <div class="row has-margin-bottom-4">
            <div class="columns">
              <div class="column">
                <h1 class="title">Project details</h1>
              </div>
            </div>
          </div>
          <router-view />
        </div>
      </div>
    
  <!-- </div> -->
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import ProjectSidebar from './project-sidebar.vue';

@Component({
  components: {
    ProjectSidebar,
  },
})
export default class ProjectDetails extends Vue {
}
</script>
