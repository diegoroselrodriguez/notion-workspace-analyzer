import { useEffect, useState } from "react";

import ExecutiveSummary from "../features/dashboard/ExecutiveSummary";
import ProjectOverview from "../features/dashboard/header/ProjectOverview";
import ProjectQuestionBox from "../features/chat/ProjectQuestionBox";
import KPICards from "../features/dashboard/KPICards";
import TeamActivity from "../features/dashboard/TeamActivity";
import ProjectTimeline from "../features/timeline/ProjectTimeline";

import LoadingScreen from "../components/LoadingScreen";
import NotionStatus from "../components/NotionStatus";

import { DashboardService } from "../services/dashboard.service";

import type { DashboardData } from "../types/dashboard";

type Props = {
  project: string;
};

export default function DashboardPage({ project }: Props) {

  const [dashboard, setDashboard] =
    useState<DashboardData | null>(null);

  const [loading, setLoading] =
    useState(true);

  const [error, setError] =
    useState<string | null>(null);

  const [lastSync, setLastSync] =
    useState("");

  useEffect(() => {

    let mounted = true;

    setLoading(true);
    setDashboard(null);
    setError(null);

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

      })
      .catch((error: unknown) => {

        if (!mounted) return;

        console.error(error);

        setError(
          error instanceof Error
            ? error.message
            : "No se ha podido cargar el proyecto."
        );

      })
      .finally(() => {

        if (!mounted) return;

        setLoading(false);

      });

    return () => {

      mounted = false;

    };

  }, [project]);

  if (loading) {

    return <LoadingScreen />;

  }

  if (error) {

    return (

      <div className="flex min-h-full items-center justify-center p-10">

        <div className="w-full max-w-2xl rounded-3xl border border-red-200 bg-white p-8 shadow-xl">

          <div className="text-5xl">
            ⚠️
          </div>

          <h1 className="mt-5 text-3xl font-black text-slate-900">

            No se pudo cargar el proyecto

          </h1>

          <p className="mt-3 leading-7 text-slate-600">

            InsightFlow no ha podido obtener la información necesaria para construir el panel ejecutivo.

          </p>

          <div className="mt-6 rounded-2xl border border-red-200 bg-red-50 p-4">

            <div className="text-xs font-bold uppercase tracking-widest text-red-600">

              Detalle

            </div>

            <div className="mt-2 text-sm text-red-800">

              {error}

            </div>

          </div>

          <p className="mt-6 text-sm text-slate-500">

            Puedes seleccionar otro proyecto en el menú lateral o volver a intentarlo más tarde.

          </p>

        </div>

      </div>

    );

  }

  if (!dashboard) {

    return (

      <div className="p-10">

        No hay información disponible para este proyecto.

      </div>

    );

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