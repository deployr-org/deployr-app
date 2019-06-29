import { Team } from '@/features/teams/team';

export class State {
  public teams: Array<Team> = [
    { name: 'Team #1', slug: 'team-1', members: 1, teams: [ { name: 'Nested Team #1', slug: 'team-1-1', members: 2, teams: [] } ] },
    { name: 'Team #2', slug: 'team-2', members: 3, teams: [ { name: 'Nested Team #2', slug: 'team-1-2', members: 2, teams: [] } ] },
    { name: 'Team #3', slug: 'team-3', members: 5, teams: [] },
    { name: 'Team #4', slug: 'team-4', members: 2, teams: [ { name: 'Nested Team #4', slug: 'team-4-1', members: 4, teams: [] } ] },
    { name: 'Team #5', slug: 'team-5', members: 0, teams:
      [
        { name: 'Nested Team #5', slug: 'team-5', members: 1, teams: [] },
        { name: 'Nested Team #5 - 2', slug: 'team-5-2', members: 3, teams:
          [
            { name: 'Nested Nested Team #5 - 1', slug: 'team-5-2-1', members: 6, teams: [] },
            { name: 'Nested Nested Team #5 - 2', slug: 'team-5-2-2', members: 2, teams: [] },
          ],
        },
      ],
    },
  ];
}
