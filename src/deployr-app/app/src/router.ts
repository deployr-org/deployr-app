import Vue from 'vue';
import Router from 'vue-router';
import Home from '@/views/Home.vue';
import Projects from '@/features/projects/projects.vue';
import ProjectList from '@/features/projects/project-list.vue';
import ProjectDetails from '@/features/projects/project-details.vue';
import Teams from '@/features/teams/teams.vue';
import TeamList from '@/features/teams/team-list.vue';
import TeamDetails from '@/features/teams/team-details.vue';
import Settings from '@/features/settings/settings.vue';
import SettingList from '@/features/settings/setting-list.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
      meta: {
        breadcrumbTitle: 'home',
      },
      redirect: { name: 'project-list' },
      children: [
        {
          path: '',
          name: 'projects',
          component: Projects,
          meta: {
            breadcrumbTitle: 'projects',
          },
          redirect: { name: 'project-list' },
          children: [
            {
              path: 'projects',
              name: 'project-list',
              component: ProjectList,
              meta: {
                breadcrumbTitle: 'projects',
                ignoreBreadcrumb: true,
              },
            },
            {
              path: 'projects/:name',
              name: 'project-details',
              component: ProjectDetails,
              meta: {
                breadcrumbTitle: 'project details',
              },
            },
          ],
        },
        {
          path: '',
          name: 'teams',
          component: Teams,
          meta: {
            meta: {
              breadcrumbTitle: 'teams',
            },
            redirect: { name: 'team-list' },
          },
          children: [
            {
              path: 'teams',
              name: 'team-list',
              component: TeamList,
              meta: {
                breadcrumbTitle: 'teams',
                ignoreBreadcrumb: true,
              },
            },
            {
              path: 'teams/:name',
              name: 'team-details',
              component: TeamDetails,
              meta: {
                breadcrumbTitle: 'team details',
              },
            },
          ],
        },
        {
          path: '',
          name: 'settings',
          component: Settings,
          meta: {
            meta: {
              breadcrumbTitle: 'settings',
            },
            redirect: { name: 'setting-list' },
          },
          children: [
            {
              path: 'settings',
              name: 'setting-list',
              component: SettingList,
              meta: {
                breadcrumbTitle: 'settings',
                ignoreBreadcrumb: true,
              },
            },
          ],
        },
      ],
    },
    // {
    //   path: '/about',
    //   name: 'about',
    //   // route level code-splitting
    //   // this generates a separate chunk (about.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () => import('./views/About.vue'),
    // },
  ],
});
