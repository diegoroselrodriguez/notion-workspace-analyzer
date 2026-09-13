import type { KPI, ActivityMember } from "../../../types/dashboard";

type Props = {
  kpis: KPI[];
  activity: ActivityMember[];
  insights: string[];
};

export default function ProjectInsights({

  kpis,
  activity,
  insights

}: Props) {

  const events =
    kpis.find(k => k.label === "Eventos")?.value ?? 0;

  const participants =
    kpis.find(k => k.label === "Participantes")?.value ?? 0;

  const deliveries =
    kpis.find(k => k.label === "Entregas")?.value ?? 0;

  const publications =
    kpis.find(k => k.label === "Publicaciones")?.value ?? 0;

  const mostActive =
    activity[0];

  return (

    <div className="rounded-3xl bg-white shadow-xl">

      <div className="border-b border-slate-200 px-8 py-6">

        <div className="flex items-center gap-4">

          <div className="flex h-16 w-16 items-center justify-center rounded-3xl bg-gradient-to-br from-violet-500 to-blue-600 text-4xl text-white">

            🤖

          </div>

          <div>

            <h2 className="text-3xl font-black">

              AI Executive Report

            </h2>

            <p className="mt-1 text-slate-500">

              Resumen ejecutivo generado automáticamente.

            </p>

          </div>

        </div>

      </div>

      <div className="grid grid-cols-2 gap-6 p-8">

        <Card
          icon="📊"
          title="Actividad"
          text={`Se detectaron ${events} eventos repartidos entre ${participants} participantes.`}
          color="from-blue-500 to-cyan-500"
        />

        <Card
          icon="👤"
          title="Liderazgo"

          text={
            mostActive
              ? `${mostActive.name} concentra la mayor actividad del proyecto con ${mostActive.events} intervenciones.`
              : "No hay datos suficientes."
          }

          color="from-violet-500 to-fuchsia-500"
        />

        <Card
          icon="📦"
          title="Producción"

          text={`El proyecto registra ${deliveries} entregas y ${publications} publicaciones.`}

          color="from-emerald-500 to-green-500"
        />

        <Card
          icon="🧠"
          title="Conclusión"

          text="La secuencia temporal no muestra bloqueos importantes y el proyecto presenta una evolución consistente."

          color="from-orange-500 to-amber-500"
        />

      </div>

      <div className="border-t border-slate-200 bg-slate-50 p-8">

        <div className="mb-5 text-xl font-bold">

          Conclusiones detectadas automáticamente

        </div>

        <div className="space-y-4">

          {insights.map((insight, index) => (

            <div
              key={index}
              className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm"
            >

              <div className="flex gap-4">

                <div className="text-2xl">

                  ✅

                </div>

                <div className="leading-7">

                  {insight}

                </div>

              </div>

            </div>

          ))}

        </div>

      </div>

    </div>

  );

}

function Card({

  icon,
  title,
  text,
  color

}: {

  icon: string;
  title: string;
  text: string;
  color: string;

}) {

  return (

    <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">

      <div className={`h-2 bg-gradient-to-r ${color}`} />

      <div className="p-6">

        <div className="text-4xl">

          {icon}

        </div>

        <div className="mt-5 text-2xl font-bold">

          {title}

        </div>

        <div className="mt-3 leading-8 text-slate-600">

          {text}

        </div>

      </div>

    </div>

  );

}