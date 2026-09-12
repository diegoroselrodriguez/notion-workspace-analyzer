export interface DashboardDto {

  title: string;

  status: string;

  summary: string;

  kpis: {
    label: string;
    value: number;
  }[];

  activity: {
    name: string;
    events: number;
  }[];

  timeline: {
    type: string;
    author: string;
    date: string;
    description: string;
  }[];

}