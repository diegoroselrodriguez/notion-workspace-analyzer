import type { ActivityMember, KPI } from "../../../types/dashboard";

type Props = {
  kpis: KPI[];
  activity: ActivityMember[];
};

export default function ProjectOverview({
  kpis,
  activity,
}: Props) {

  const events =
    kpis.find(k => k.label === "Eventos")?.value ?? 0;

  const participants =
    kpis.find(k => k.label === "Participantes")?.value ?? 0;

  const publications =
    kpis.find(k => k.label === "Publicaciones")?.value ?? 0;

  const leader = activity[0];

  return (

    <div className="rounded-3xl bg-gradient-to-r from-sky-600 via-blue-700 to-indigo-700 p-6 text-white shadow-xl">

      <div className="grid grid-cols-4 gap-6">

        <div>

          <div className="text-sm text-blue-100">
            Estado
          </div>

          <div className="mt-2 text-2xl font-bold">
            🟢 Completado
          </div>

        </div>

        <div>

          <div className="text-sm text-blue-100">
            Participantes
          </div>

          <div className="mt-2 text-2xl font-bold">
            👥 {participants}
          </div>

        </div>

        <div>

          <div className="text-sm text-blue-100">
            Eventos
          </div>

          <div className="mt-2 text-2xl font-bold">
            ⚡ {events}
          </div>

        </div>

        <div>

          <div className="text-sm text-blue-100">
            Publicaciones
          </div>

          <div className="mt-2 text-2xl font-bold">
            🚀 {publications}
          </div>

        </div>

      </div>

      {leader && (

        <div className="mt-6 rounded-2xl bg-white/10 p-4">

          <strong>InsightFlow:</strong>{" "}
          {leader.name} fue la persona con mayor participación en este proyecto.

        </div>

      )}

    </div>

  );

}