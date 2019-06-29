export interface Team {
  name: string;
  members: number;
  teams: Array<Team>;
  slug: string;
}
