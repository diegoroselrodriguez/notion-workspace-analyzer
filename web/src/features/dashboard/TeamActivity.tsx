import type { ActivityMember } from "../../types/dashboard";

type Props = {
  members: ActivityMember[];
};

export default function TeamActivity({ members }: Props) {

  const maxEvents = Math.max(...members.map(member => member.events));

  return (

    <div className="rounded-3xl bg-white p-8 shadow">

      <h2 className="text-2xl font-bold">

        📈 Actividad del equipo

      </h2>

      <p className="mt-2 text-slate-500">

        Distribución de la participación durante el proyecto.

      </p>

      <div className="mt-8 space-y-6">

        {members.map(member => (

          <div key={member.name}>

            <div className="mb-2 flex justify-between">

              <span className="font-semibold">

                {member.name}

              </span>

              <span className="text-slate-500">

                {member.events} eventos

              </span>

            </div>

            <div className="h-3 overflow-hidden rounded-full bg-slate-200">

              <div
                className="h-full rounded-full bg-blue-600 transition-all"
                style={{
                  width: `${(member.events / maxEvents) * 100}%`,
                }}
              />

            </div>

          </div>

        ))}

      </div>

    </div>

  );

}