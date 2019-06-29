import Vue from 'vue';
import Router from 'vue-router';
import Dashboard from '@/features/dashboard/dashboard.vue';
import Projects from '@/features/projects/projects.vue';
import ProjectList from '@/features/projects/project-list.vue';
import ProjectDetails from '@/features/projects/project-details.vue';
import ProjectDeployments from '@/features/projects/project-deployments.vue';
import ProjectSettings from '@/features/projects/project-settings.vue';
import ProjectTeams from '@/features/projects/project-teams.vue';
import ProjectUsers from '@/features/projects/project-users.vue';
import ProjectNotifications from '@/features/projects/project-notifications.vue';
import Teams from '@/features/teams/teams.vue';
import TeamList from '@/features/teams/team-list.vue';
import TeamCreation from '@/features/teams/team-creation.vue';
import TeamDetails from '@/features/teams/team-details.vue';
import TeamProjects from '@/features/teams/team-projects.vue';
import TeamSettings from '@/features/teams/team-settings.vue';
import TeamUsers from '@/features/teams/team-users.vue';
import TeamNotifications from '@/features/teams/team-notifications.vue';
import Settings from '@/features/settings/settings.vue';
import SettingList from '@/features/settings/setting-list.vue';
import Store from '@/store';
import { Team } from './features/teams/team';

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '',
      name: 'home',
      meta: {
        breadcrumbTitle: 'home',
      },
      component: Dashboard,
    },
    {
      path: '/projects',
      name: 'projects',
      component: Projects,
      meta: {
        breadcrumbTitle: 'projects',
        // ignoreBreadcrumb: true,
      },
      redirect: { name: 'project-list' },
      children: [
        {
          path: '',
          name: 'project-list',
          component: ProjectList,
          meta: {
            breadcrumbTitle: 'projects',
            ignoreBreadcrumb: true,
          },
        },
        {
          path: ':name',
          name: 'project-details',
          component: ProjectDetails,
          meta: {
            breadcrumbTitle: 'project details',
          },
          redirect: { name: 'project-deployments' },
          children: [
            {
              path: '',
              name: 'project-deployments',
              component: ProjectDeployments,
              meta: {
                breadcrumbTitle: 'deployments',
                // ignoreBreadcrumb: true,
              },
            },
            {
              path: 'teams',
              name: 'project-teams',
              component: ProjectTeams,
              meta: {
                breadcrumbTitle: 'teams',
              },
            },
            {
              path: 'users',
              name: 'project-users',
              component: ProjectUsers,
              meta: {
                breadcrumbTitle: 'users',
              },
            },
            {
              path: 'notifications',
              name: 'project-notifications',
              component: ProjectNotifications,
              meta: {
                breadcrumbTitle: 'notifications',
              },
            },
            {
              path: 'settings',
              name: 'project-settings',
              component: ProjectSettings,
              meta: {
                breadcrumbTitle: 'settings',
              },
            },
          ],
        },
      ],
    },
    {
      path: '/teams',
      name: 'teams',
      component: Teams,
      meta: {
        breadcrumbTitle: 'teams',
        // ignoreBreadcrumb: true,
      },
      redirect: { name: 'team-list' },
      children: [
        {
          path: '',
          name: 'team-list',
          component: TeamList,
          meta: {
            breadcrumbTitle: 'teams',
            ignoreBreadcrumb: true,
          },
        },
        {
          path: 'create',
          name: 'team-creation',
          component: TeamCreation,
          meta: {
            breadcrumbTitle: 'create team',
          },
        },
        {
          path: ':name',
          name: 'team-details',
          component: TeamDetails,
          redirect: { name: 'team-users' },
          meta: {
            breadcrumbTitle: 'team details',
          },
          props: (route) => {
            const getTeamBySlug: (slug: string) => Team | null = Store.getters['team/teamBySlug'];
            const team = getTeamBySlug(route.params.name);

            if (team != null) {
              route.matched[1].meta.breadcrumbTitle = team.name.toLowerCase();
            }

            return { team };
          },
          children: [
            {
              path: '',
              name: 'team-users',
              component: TeamUsers,
              meta: {
                breadcrumbTitle: 'users',
                // ignoreBreadcrumb: true,
              },
            },
            {
              path: 'teams',
              name: 'team-projects',
              component: TeamProjects,
              meta: {
                breadcrumbTitle: 'projects',
              },
            },
            {
              path: 'notifications',
              name: 'team-notifications',
              component: TeamNotifications,
              meta: {
                breadcrumbTitle: 'notifications',
              },
            },
            {
              path: 'settings',
              name: 'team-settings',
              component: TeamSettings,
              meta: {
                breadcrumbTitle: 'settings',
              },
            },
          ],
        },
      ],
    },
    {
      path: '/settings',
      name: 'settings',
      component: Settings,
      meta: {
        breadcrumbTitle: 'settings',
      },
      redirect: { name: 'setting-list' },
      children: [
        {
          path: '',
          name: 'setting-list',
          component: SettingList,
          meta: {
            breadcrumbTitle: 'settings',
            ignoreBreadcrumb: true,
          },
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
