import { useEffect, useState } from "react";
import { Api } from "../services/api";

type Workspace = {
  projects: number;
  completed: number;
  active: number;
  people: number;
  topProjects: string[];
  activity: {
    name: string;
    projects: number;
  }[];
};

export default function WorkspacePage() {

  const [workspace, setWorkspace] = useState<Workspace | null>(null);

  useEffect(() => {
    Api.get("/api/workspace").then(setWorkspace);
  }, []);

  if (!workspace) {
    return (
      <div className="p-6 text-lg">
        Cargando Workspace...
      </div>
    );
  }

  const maxProjects = Math.max(...workspace.activity.map(p => p.projects), 1);

  return (

    <div className="space-y-5 p-5">

      <div className="overflow-hidden rounded-2xl bg-gradient-to-br from-slate-950 via-slate-900 to-blue-950 text-white shadow-xl">

        <div className="flex items-center justify-between px-8 py-6">

          <div>

            <div className="text-xs font-bold uppercase tracking-[0.35em] text-cyan-300">

              InsightFlow AI

            </div>

            <h1 className="mt-2 text-4xl font-black">

              Visión global

            </h1>

            <p className="mt-3 max-w-3xl text-base leading-7 text-slate-300">

              Vista ejecutiva del departamento construida automáticamente a partir de la actividad registrada en Notion.

            </p>

            <div className="mt-4 flex flex-wrap gap-2">

              <Badge>📁 {workspace.projects} proyectos</Badge>
              <Badge>👥 {workspace.people} personas</Badge>
              <Badge>🟢 {workspace.completed} finalizados</Badge>
              <Badge>🟡 {workspace.active} activos</Badge>

            </div>

          </div>

          <div className="rounded-2xl bg-white/10 p-5">

            <div className="text-xs uppercase tracking-widest text-cyan-300">

              Workspace

            </div>

            <div className="mt-3 space-y-2 text-sm">

              <div>✅ Sincronizado</div>
              <div>🤖 IA activa</div>
              <div>🕒 Hace unos segundos</div>

            </div>

          </div>

        </div>

      </div>

      <div className="grid grid-cols-4 gap-4">

        <Card title="Proyectos" value={workspace.projects} />
        <Card title="Finalizados" value={workspace.completed} color="text-green-600" />
        <Card title="Activos" value={workspace.active} color="text-blue-600" />
        <Card title="Personas" value={workspace.people} />

      </div>

      <div className="grid grid-cols-12 gap-5">

        <div className="col-span-5 rounded-2xl bg-white shadow-xl">

          <div className="border-b border-slate-200 px-5 py-4">

            <h2 className="text-xl font-bold">

              Proyectos recientes

            </h2>

          </div>

          <div className="space-y-2 p-5">

            {workspace.topProjects.slice(0, 6).map((project, index) => (

              <div
                key={`${project}-${index}`}
                className="rounded-xl border border-slate-200 p-3 transition hover:border-blue-300">

                {project}

              </div>

            ))}

          </div>

        </div>

        <div className="col-span-7 rounded-2xl bg-white shadow-xl">

          <div className="border-b border-slate-200 px-5 py-4">

            <h2 className="text-xl font-bold">

              Carga por responsable

            </h2>

          </div>

          <div className="space-y-4 p-5">

            {workspace.activity.map(person => (

              <div key={person.name}>

                <div className="mb-2 flex justify-between">

                  <span className="font-medium">

                    {person.name}

                  </span>

                  <span className="text-sm font-semibold text-slate-500">

                    {person.projects}

                  </span>

                </div>

                <div className="h-2 rounded-full bg-slate-200">

                  <div
                    className="h-full rounded-full bg-blue-600"
                    style={{
                      width: `${(person.projects / maxProjects) * 100}%`
                    }}
                  />

                </div>

              </div>

            ))}

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

    <div className="rounded-2xl bg-white p-5 shadow-sm">

      <div className="text-sm text-slate-500">

        {title}

      </div>

      <div className={`mt-2 text-5xl font-black ${color}`}>

        {value}

      </div>

    </div>

  );

}

function Badge({
  children,
}: {
  children: React.ReactNode;
}) {

  return (

    <div className="rounded-full bg-white/10 px-3 py-1 text-sm">

      {children}

    </div>

  );

}