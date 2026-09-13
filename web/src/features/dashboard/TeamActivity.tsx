import type { ActivityMember } from "../../types/dashboard";

type Props = {
  members: ActivityMember[];
};

export default function TeamActivity({ members }: Props) {

  const maxEvents = Math.max(...members.map(m => m.events), 1);

  return (

    <div className="rounded-2xl bg-white shadow-xl">

      <div className="border-b border-slate-200 px-6 py-4">

        <h2 className="text-xl font-bold">

          Actividad del equipo

        </h2>

        <p className="mt-1 text-sm text-slate-500">

          Participación detectada automáticamente en el proyecto.

        </p>

      </div>

      <div className="space-y-5 p-6">

        {members.map((member, index) => {

          const width = (member.events / maxEvents) * 100;

          return (

            <div
              key={member.name}
              className="rounded-xl border border-slate-200 p-4">

              <div className="mb-3 flex items-center justify-between">

                <div className="flex items-center gap-3">

                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-600 font-bold text-white">

                    {index + 1}

                  </div>

                  <div>

                    <div className="font-semibold">

                      {member.name}

                    </div>

                    <div className="text-xs text-slate-500">

                      {member.events} eventos detectados

                    </div>

                  </div>

                </div>

                <div className="rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold">

                  {Math.round(width)}%

                </div>

              </div>

              <div className="h-3 overflow-hidden rounded-full bg-slate-200">

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

  );

}