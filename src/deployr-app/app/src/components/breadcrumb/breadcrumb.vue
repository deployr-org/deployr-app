<template>
  <nav class="breadcrumb" aria-label="breadcrumbs">
    <ul>
      <li class="breadcrumb-item" v-for="(breadcrumb, index) in breadcrumbs" :key="index" :class="{ 'is-active': index == breadcrumbs.length - 1 }">
        <router-link v-if="index < breadcrumbs.length - 1" :to="{ name: breadcrumb.name, params: breadcrumb.params }" exact>{{ breadcrumb.meta.breadcrumbTitle || breadcrumb.meta.title || breadcrumb.name }}</router-link>
        <a v-if="index == breadcrumbs.length - 1">{{ breadcrumb.meta.breadcrumbTitle || breadcrumb.meta.title || breadcrumb.name }}</a>
      </li>
    </ul>
  </nav>
</template>

<script lang="ts">
import { Component, Prop, Vue, Watch } from 'vue-property-decorator';
import { Route, RouteConfig } from 'vue-router';

@Component
export default class Breadcrumb extends Vue {
  private routes: Array<RouteConfig> = new Array<RouteConfig>();

  public get breadcrumbs(): Array<RouteConfig> {
      return this.routes;
  }

  public created(): void {
      this.generateBreadcrumb();
  }

  private generateBreadcrumb(): void {
      const routes = this.$route.matched.filter((route) => {
          return route.meta.ignoreBreadcrumb !== true;
      }).filter((route) => {
          return route.name != null;
      }).map((route) => {
          return { name: route.name, path: route.path, meta: route.meta };
      });

      const home = routes.find((route) => route.name === 'home');

      if (home == null) {
          routes.unshift({ name: 'home', path: '', meta: { title: 'home' } });
      }

      this.routes = routes;
  }

  @Watch('$route', { deep: true })
  private onRouteChanged(to: Route): void {
      this.generateBreadcrumb();
  }
}
</script>