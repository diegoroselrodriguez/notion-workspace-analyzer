import type { KPI, ActivityMember } from "../../../types/dashboard";

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

  const deliveries =
    kpis.find(k => k.label === "Entregas")?.value ?? 0;

  return (

    <div className="overflow-hidden rounded-3xl bg-gradient-to-br from-slate-950 via-slate-900 to-blue-950 text-white shadow-2xl">

      <div className="flex items-center justify-between border-b border-white/10 px-10 py-8">

        <div>

          <div className="text-sm font-semibold uppercase tracking-[0.3em] text-cyan-300">

            InsightFlow AI

          </div>

          <h1 className="mt-3 text-5xl font-black">

            Executive Dashboard

          </h1>

          <p className="mt-4 max-w-3xl text-lg text-slate-300 leading-8">

            Plataforma de inteligencia que analiza automáticamente la actividad registrada
            en Notion para reconstruir la historia del proyecto, identificar patrones,
            medir productividad y generar conclusiones ejecutivas.

          </p>

        </div>

        <div className="rounded-3xl border border-cyan-400/30 bg-cyan-400/10 px-8 py-6 text-center backdrop-blur">

          <div className="text-sm uppercase tracking-widest text-cyan-200">

            AI Confidence

          </div>

          <div className="mt-2 text-6xl font-black text-cyan-300">

            98%

          </div>

          <div className="mt-4 text-sm text-slate-300">

            Último análisis

          </div>

          <div className="font-semibold">

            Hace unos segundos

          </div>

        </div>

      </div>

      <div className="grid grid-cols-4 divide-x divide-white/10">

        <Metric
          icon="⚡"
          value={events}
          label="Eventos detectados"
        />

        <Metric
          icon="👥"
          value={participants}
          label="Participantes"
        />

        <Metric
          icon="📦"
          value={deliveries}
          label="Entregas"
        />

        <Metric
          icon="🚀"
          value={publications}
          label="Publicaciones"
        />

      </div>

      <div className="border-t border-white/10 bg-black/20 px-10 py-6">

        <div className="flex items-center justify-between">

          <div>

            <div className="text-sm uppercase tracking-widest text-cyan-300">

              Motor de análisis

            </div>

            <div className="mt-2 text-xl font-semibold">

              Timeline · Activity Engine · AI Insights · Workspace Intelligence

            </div>

          </div>

          <div className="text-right">

            <div className="text-sm text-slate-400">

              Responsables detectados

            </div>

            <div className="mt-2 text-3xl font-bold">

              {activity.length}

            </div>

          </div>

        </div>

      </div>

    </div>

  );

}

function Metric({
  icon,
  value,
  label,
}: {
  icon: string;
  value: number;
  label: string;
}) {

  return (

    <div className="p-8">

      <div className="text-4xl">

        {icon}

      </div>

      <div className="mt-5 text-5xl font-black">

        {value}

      </div>

      <div className="mt-2 text-slate-300">

        {label}

      </div>

    </div>

  );

}