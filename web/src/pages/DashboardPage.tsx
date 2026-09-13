import { useEffect, useState } from "react";

import ExecutiveSummary from "../features/dashboard/ExecutiveSummary";
import ProjectOverview from "../features/dashboard/header/ProjectOverview";
import ProjectInsights from "../features/dashboard/insights/ProjectInsights";
import ProjectQuestionBox from "../features/chat/ProjectQuestionBox";
import KPICards from "../features/dashboard/KPICards";
import TeamActivity from "../features/dashboard/TeamActivity";
import ProjectTimeline from "../features/timeline/ProjectTimeline";

import { DashboardService } from "../services/dashboard.service";

import type { DashboardData } from "../types/dashboard";

type Props = {
  project: string;
};

export default function DashboardPage({ project }: Props) {

  const [dashboard, setDashboard] =
    useState<DashboardData | null>(null);

  useEffect(() => {

    DashboardService
      .getDashboard(project)
      .then(setDashboard)
      .catch(console.error);

  }, [project]);

  if (!dashboard) {

    return (
      <div className="p-8 text-xl">
        Cargando proyecto...
      </div>
    );

  }

  return (

    <div className="space-y-8 p-8">

      <ProjectOverview
        kpis={dashboard.kpis}
        activity={dashboard.activity}
      />

      <ExecutiveSummary
        title={dashboard.title}
        status={dashboard.status}
        summary={dashboard.summary}
        insights={dashboard.insights}
      />

      <ProjectQuestionBox
          kpis={dashboard.kpis}
          activity={dashboard.activity}
          events={dashboard.timeline}
      />

      <ProjectInsights
        kpis={dashboard.kpis}
        activity={dashboard.activity}
        insights={dashboard.insights}
      />

      <KPICards
        items={dashboard.kpis}
      />

      <div className="grid grid-cols-2 gap-8">

        <TeamActivity
          members={dashboard.activity}
        />

        <ProjectTimeline
          events={dashboard.timeline}
        />

      </div>

    </div>

  );

}