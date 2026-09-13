import { useState } from "react";

import AppLayout from "./layouts/AppLayout";

import DashboardPage from "./pages/DashboardPage";
import WorkspacePage from "./pages/WorkspacePage";

import ProjectsSidebar from "./features/projects/ProjectsSidebar";

export default function App() {

  const [project, setProject] =
    useState("resultados");

  const [view, setView] =
    useState<"workspace" | "project">("project");

  return (

    <AppLayout

      sidebar={

        <div className="space-y-4">

          <div className="rounded-2xl bg-white p-3 shadow">

            <button
              onClick={() => setView("workspace")}
              className="mb-2 w-full rounded-xl bg-slate-900 px-4 py-3 text-white"
            >
              🌍 Workspace
            </button>

            <button
              onClick={() => setView("project")}
              className="w-full rounded-xl bg-blue-600 px-4 py-3 text-white"
            >
              📁 Proyecto
            </button>

          </div>

          <ProjectsSidebar
            selected={project}
            onSelect={(p) => {

              setProject(p);
              setView("project");

            }}
          />

        </div>

      }

    >

      {

        view === "workspace"

          ? <WorkspacePage />

          : <DashboardPage project={project} />

      }

    </AppLayout>

  );

}