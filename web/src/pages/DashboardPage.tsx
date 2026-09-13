import { useEffect, useState } from "react";

import ExecutiveSummary from "../features/dashboard/ExecutiveSummary";
import ProjectOverview from "../features/dashboard/header/ProjectOverview";
import ProjectQuestionBox from "../features/chat/ProjectQuestionBox";
import KPICards from "../features/dashboard/KPICards";
import TeamActivity from "../features/dashboard/TeamActivity";
import ProjectTimeline from "../features/timeline/ProjectTimeline";

import LoadingScreen from "../components/LoadingScreen";

import { DashboardService } from "../services/dashboard.service";

import type { DashboardData } from "../types/dashboard";
import NotionStatus from "../components/NotionStatus";

type Props = {
  project: string;
};

export default function DashboardPage({ project }: Props) {

  const [dashboard, setDashboard] =
    useState<DashboardData | null>(null);

  const [loading, setLoading] =
    useState(true);

  const [lastSync, setLastSync] =
    useState("");

  useEffect(() => {

    let mounted = true;

    setLoading(true);
    setDashboard(null);

    Promise.all([
      DashboardService.getDashboard(project),
      new Promise(resolve => setTimeout(resolve, 1500))
    ])
      .then(([data]) => {

        if (!mounted) return;

        setDashboard(data);

        setLastSync(
          new Date().toLocaleString("es-ES", {
            day: "2-digit",
            month: "2-digit",
            year: "numeric",
            hour: "2-digit",
            minute: "2-digit",
            second: "2-digit"
          })
        );

        setLoading(false);

      })
      .catch(console.error);

    return () => {

      mounted = false;

    };

  }, [project]);

  if (loading || !dashboard) {

    return <LoadingScreen />;

  }

  return (

    <div className="space-y-5 p-5">

      <ProjectOverview
        title={dashboard.title}
        kpis={dashboard.kpis}
        activity={dashboard.activity}
        lastSync={lastSync}
      />

      <NotionStatus
        project={dashboard.title}
        lastSync={lastSync}
      />

      <ExecutiveSummary
        title={dashboard.title}
        status={dashboard.status}
        summary={dashboard.summary}
        insights={dashboard.insights}
      />

      <div className="grid grid-cols-12 gap-5">

        <div className="col-span-4">

          <ProjectQuestionBox
            kpis={dashboard.kpis}
            activity={dashboard.activity}
            events={dashboard.timeline}
          />

        </div>

        <div className="col-span-8">

          <KPICards
            items={dashboard.kpis}
          />

        </div>

      </div>

      <div className="grid grid-cols-12 gap-5 items-start">

        <div className="col-span-4">

          <TeamActivity
            members={dashboard.activity}
          />

        </div>

        <div className="col-span-8">

          <ProjectTimeline
            events={dashboard.timeline}
          />

        </div>

      </div>

    </div>

  );

}