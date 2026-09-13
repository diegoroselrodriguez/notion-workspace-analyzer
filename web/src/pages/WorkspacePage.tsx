import { useEffect, useState } from "react";
import { Api } from "../services/api";

type Workspace = {
  projects: number;
  completed: number;
  active: number;
  people: number;
  topProjects: string[];
  topPeople: string[];
  activity: {
    name: string;
    projects: number;
  }[];
};

export default function WorkspacePage() {

  const [workspace, setWorkspace] = useState<Workspace | null>(null);

  useEffect(() => {

    Api.get("/api/workspace")
      .then(setWorkspace);

  }, []);

  if (!workspace) {

    return (

      <div className="p-10">

        Cargando Workspace...

      </div>

    );

  }

  const maxProjects = Math.max(

    ...workspace.activity.map(p => p.projects),

    1

  );

  return (

    <div className="space-y-6 p-5">

      <div className="rounded-2xl bg-gradient-to-r from-slate-950 via-slate-900 to-blue-900 p-8 text-white shadow-xl">

        <div className="text-xs font-bold uppercase tracking-[0.35em] text-cyan-300">

          InsightFlow AI

        </div>

        <h1 className="mt-2 text-4xl font-black">

          Visión global del Workspace

        </h1>

        <p className="mt-3 max-w-3xl text-slate-300">

          Análisis agregado de todos los proyectos registrados en Notion.

        </p>

      </div>

      <div className="grid grid-cols-4 gap-4">

        <Card
          title="Proyectos analizados"
          value={workspace.projects}
        />

        <Card
          title="Personas detectadas"
          value={workspace.people}
          color="text-blue-600"
        />

        <Card
          title="Responsables principales"
          value={workspace.topPeople.length}
          color="text-violet-600"
        />

        <Card
          title="Proyectos evaluados"
          value={workspace.projects}
          color="text-emerald-600"
        />

      </div>

      <div className="grid grid-cols-2 gap-5">

        <div className="rounded-2xl bg-white shadow-lg">

          <div className="border-b border-slate-200 px-6 py-4">

            <h2 className="text-xl font-bold">

              📋 Proyectos con menor actividad

            </h2>

            <p className="mt-1 text-sm text-slate-500">

              Proyectos detectados con mayor tiempo sin actividad registrada.

            </p>

          </div>

          <div className="space-y-3 p-5">

            {workspace.topProjects.map(project => (

              <div
                key={project}
                className="rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 transition hover:border-blue-300 hover:bg-blue-50"
              >

                {project}

              </div>

            ))}

          </div>

        </div>

        <div className="rounded-2xl bg-white shadow-lg">

          <div className="border-b border-slate-200 px-6 py-4">

            <h2 className="text-xl font-bold">

              👥 Participación por responsable

            </h2>

            <p className="mt-1 text-sm text-slate-500">

              Número de proyectos en los que ha participado cada responsable.

            </p>

          </div>

          <div className="space-y-4 p-5">

            {workspace.activity.map(person => {

              const width =
                (person.projects / maxProjects) * 100;

              return (

                <div key={person.name}>

                  <div className="mb-2 flex items-center justify-between">

                    <span className="font-medium">

                      {person.name}

                    </span>

                    <span className="rounded-full bg-slate-100 px-2 py-1 text-xs font-semibold text-slate-600">

                      {person.projects}

                    </span>

                  </div>

                  <div className="h-2 overflow-hidden rounded-full bg-slate-200">

                    <div
                      className="h-full rounded-full bg-gradient-to-r from-blue-600 to-cyan-500"
                      style={{
                        width: `${width}%`
                      }}
                    />

                  </div>

                </div>

              );

            })}

          </div>

        </div>

      </div>

    </div>

  );

}

function Card({
  title,
  value,
  color = "text-slate-900"
}: {
  title: string;
  value: number;
  color?: string;
}) {

  return (

    <div className="rounded-2xl bg-white p-5 shadow-lg">

      <div className="text-sm font-medium text-slate-500">

        {title}

      </div>

      <div className={`mt-2 text-4xl font-black ${color}`}>

        {value}

      </div>

    </div>

  );

}