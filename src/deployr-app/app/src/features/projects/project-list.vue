<template>
  <div>
    <div class="row has-margin-bottom-4">
      <div class="columns">
        <div class="column">
          <h1 class="title">Projects</h1>
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
          <a class="button is-text is-paddingless">Create new project</a>
        </div>
      </div>
    </div>

    <div v-for="(project, index) in projects" :key="index" class="box is-radiusless">
      <div class="columns is-vcentered">
        <div class="column">
         <h2>{{ project }}</h2>
         <p class="is-size-7">{{ Math.floor(Math.random() * 3) }}{{ Math.floor(Math.random() * 3) ? '/3' : '' }} deployments</p>
        </div>
        <div class="column is-narrow">
          <div class="buttons">
            <router-link class="button is-white" :to="{ name: 'project-details', params: { name: slugify(project) } }">
               <b-icon pack="fas" icon="angle-right" type="is-primary"></b-icon>
            </router-link>
          </div>
          <!-- <div class="buttons">
            <router-link class="button is-white" :to="{ name: 'project-details' }">
               <b-icon pack="far" icon="play-circle" type="is-dark"></b-icon>
            </router-link>
            <router-link class="button is-white" :to="{ name: 'project-details' }">
               <b-icon pack="far" icon="clock" type="is-dark"></b-icon>
            </router-link>
            <router-link class="button is-white" :to="{ name: 'project-details' }">
               <b-icon pack="fas" icon="cog" type="is-dark"></b-icon>
            </router-link>
          </div> -->
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import { slugify } from '@/utilities/string';

@Component
export default class Projects extends Vue {
  public get projects(): Array<string> {
    return [
      'Project #1',
      'Project #2',
      'Project #3',
      'Project #4',
      'Project #5',
    ];
  }

  public slugify(value: string): string {
    return slugify(value);
  }
}
</script>
