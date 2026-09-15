import { useState } from "react";

import AppLayout from "./layouts/AppLayout";

import DashboardPage from "./pages/DashboardPage";
import WorkspacePage from "./pages/WorkspacePage";
import ArchitecturePage from "./pages/ArchitecturePage";

import ProjectsSidebar from "./features/projects/ProjectsSidebar";

type View =
  | "workspace"
  | "project"
  | "architecture";

export default function App() {

  const [project, setProject] =
    useState("");

  const [view, setView] =
    useState<View>("workspace");

  return (

    <AppLayout

      sidebar={

        <div className="flex h-full flex-col">

          <div className="border-b border-slate-800 px-5 py-5">

            <div className="text-[11px] font-bold uppercase tracking-[0.35em] text-cyan-400">

              DIGI Marketing

            </div>

            <h1 className="mt-2 text-3xl font-black text-white">

              InsightFlow

            </h1>

            <p className="mt-2 text-xs leading-5 text-slate-400">

              Plataforma inteligente para el análisis automático de proyectos.

            </p>

          </div>

          <div className="space-y-2 p-4">

            <MenuButton
              active={view === "workspace"}
              icon="🌍"
              title="Visión global"
              subtitle="Departamento"
              onClick={() =>
                setView("workspace")
              }
            />

            <MenuButton
              active={view === "project"}
              icon="📁"
              title="Proyecto"
              subtitle="Panel ejecutivo"
              onClick={() => {

                if (project) {
                  setView("project");
                }

              }}
            />

            <MenuButton
              active={view === "architecture"}
              icon="⚙️"
              title="Cómo funciona"
              subtitle="Arquitectura"
              onClick={() =>
                setView("architecture")
              }
            />

          </div>

          <div className="flex-1 overflow-y-auto px-4">

            <ProjectsSidebar
              selected={project}
              onSelect={(projectId) => {

                setProject(projectId);
                setView("project");

              }}
            />

          </div>

          <div className="border-t border-slate-800 p-4">

            <div className="rounded-xl bg-slate-800 p-4">

              <div className="text-xs uppercase tracking-widest text-cyan-400">

                Estado

              </div>

              <div className="mt-2 text-white">

                🟢 Conectado con Notion

              </div>

              <div className="mt-3 text-xs text-slate-400">

                React · Express · Notion API

              </div>

            </div>

          </div>

        </div>

      }

    >

      {

        view === "workspace"

          ? <WorkspacePage />

          : view === "architecture"

            ? <ArchitecturePage />

            : project

              ? <DashboardPage project={project} />

              : <WorkspacePage />

      }

    </AppLayout>

  );

}

function MenuButton({
  active,
  icon,
  title,
  subtitle,
  onClick,
}: {
  active: boolean;
  icon: string;
  title: string;
  subtitle: string;
  onClick: () => void;
}) {

  return (

    <button
      onClick={onClick}
      className={`flex w-full items-center gap-3 rounded-xl px-4 py-3 text-left transition ${
        active
          ? "bg-blue-600 text-white shadow"
          : "bg-slate-800 text-slate-300 hover:bg-slate-700"
      }`}
    >

      <span className="text-lg">

        {icon}

      </span>

      <div>

        <div className="font-semibold">

          {title}

        </div>

        <div className="text-[11px] opacity-70">

          {subtitle}

        </div>

      </div>

    </button>

  );

}
