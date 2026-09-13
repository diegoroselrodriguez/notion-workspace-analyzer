import { useEffect, useState } from "react";

import {
  WorkspaceService,
  type WorkspaceData,
} from "../services/workspace.service";

export default function WorkspacePage() {

  const [data, setData] =
    useState<WorkspaceData | null>(null);

  useEffect(() => {

    WorkspaceService
      .getWorkspace()
      .then(setData);

  }, []);

  if (!data) {

    return (
      <div className="p-8 text-xl">
        Cargando Workspace...
      </div>
    );

  }

  return (

    <div className="space-y-8 p-8">

      <div className="rounded-3xl bg-gradient-to-r from-slate-900 via-blue-900 to-indigo-900 p-8 text-white">

        <h1 className="text-4xl font-bold">

          Workspace Intelligence

        </h1>

        <p className="mt-3 text-blue-100">

          Visión global del departamento de Marketing.

        </p>

      </div>

      <div className="grid grid-cols-4 gap-6">

        <Card title="Proyectos" value={data.projects} />

        <Card
          title="Finalizados"
          value={data.completed}
          color="text-green-600"
        />

        <Card
          title="En curso"
          value={data.active}
          color="text-orange-500"
        />

        <Card
          title="Personas"
          value={data.people}
        />

      </div>

      <div className="grid grid-cols-2 gap-8">

        <List
          title="🔥 Proyectos recientes"
          items={data.topProjects}
        />

        <div className="rounded-3xl bg-white p-8 shadow">

          <h2 className="text-2xl font-bold">

            👥 Carga por responsable

          </h2>

          <div className="mt-6 space-y-4">

            {

              data.activity.map(person => (

                <div key={person.name}>

                  <div className="mb-1 flex justify-between">

                    <span>{person.name}</span>

                    <strong>

                      {person.projects}

                    </strong>

                  </div>

                  <div className="h-3 rounded-full bg-slate-200">

                    <div
                      className="h-3 rounded-full bg-blue-600"
                      style={{
                        width: `${person.projects * 10}%`
                      }}
                    />

                  </div>

                </div>

              ))

            }

          </div>

        </div>

      </div>

    </div>

  );

}

function Card({

  title,

  value,

  color = ""

}: {

  title: string;

  value: number;

  color?: string;

}) {

  return (

    <div className="rounded-3xl bg-white p-6 shadow">

      <div className="text-sm text-slate-500">

        {title}

      </div>

      <div className={`mt-2 text-4xl font-bold ${color}`}>

        {value}

      </div>

    </div>

  );

}

function List({

  title,

  items

}: {

  title: string;

  items: string[];

}) {

  return (

    <div className="rounded-3xl bg-white p-8 shadow">

      <h2 className="text-2xl font-bold">

        {title}

      </h2>

      <div className="mt-6 space-y-4">

        {

          items.map(item => (

            <div
              key={item}
              className="rounded-xl bg-slate-50 p-4"
            >

              {item}

            </div>

          ))

        }

      </div>

    </div>

  );

}