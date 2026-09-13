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

    <div className="space-y-8">

      <div className="rounded-3xl bg-gradient-to-r from-slate-900 to-indigo-800 p-10 text-white shadow">

        <h1 className="text-6xl font-bold">

          Workspace Intelligence

        </h1>

        <p className="mt-4 text-2xl text-slate-200">

          Visión global del departamento de Marketing.

        </p>

      </div>

      <div className="grid grid-cols-4 gap-6">

        <Card title="Proyectos" value={workspace.projects} />

        <Card title="Finalizados" value={workspace.completed} color="text-green-600" />

        <Card title="En curso" value={workspace.active} color="text-orange-500" />

        <Card title="Personas" value={workspace.people} />

      </div>

      <div className="grid grid-cols-2 gap-8">

        <div className="rounded-3xl bg-white p-8 shadow">

          <h2 className="text-4xl font-bold">

            🔥 Proyectos recientes

          </h2>

          <div className="mt-8 space-y-4">

            {workspace.topProjects.map(project => (

              <div
                key={project}
                className="rounded-2xl bg-slate-50 p-5 text-xl"
              >

                {project}

              </div>

            ))}

          </div>

        </div>

        <div className="rounded-3xl bg-white p-8 shadow">

          <h2 className="text-4xl font-bold">

            👥 Carga por responsable

          </h2>

          <div className="mt-8 space-y-5">

            {workspace.activity.map(person => {

              const width =
                (person.projects / maxProjects) * 100;

              return (

                <div key={person.name}>

                  <div className="mb-2 flex items-center justify-between">

                    <span className="font-medium">

                      {person.name}

                    </span>

                    <span className="text-sm font-semibold text-slate-500">

                      {person.projects}

                    </span>

                  </div>

                  <div className="h-3 w-full overflow-hidden rounded-full bg-slate-200">

                    <div
                      className="h-full rounded-full bg-blue-600 transition-all"
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
  color = "text-black"
}: {
  title: string;
  value: number;
  color?: string;
}) {

  return (

    <div className="rounded-3xl bg-white p-6 shadow">

      <div className="text-xl text-slate-500">

        {title}

      </div>

      <div className={`mt-3 text-6xl font-bold ${color}`}>

        {value}

      </div>

    </div>

  );

}