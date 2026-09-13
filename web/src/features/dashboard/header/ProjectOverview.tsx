import type { KPI, ActivityMember } from "../../../types/dashboard";

type Props = {
  title: string;
  kpis: KPI[];
  activity: ActivityMember[];
  lastSync: string;
};

export default function ProjectOverview({
  title,
  kpis,
  activity,
  lastSync,
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

    <div className="overflow-hidden rounded-2xl bg-gradient-to-br from-slate-950 via-slate-900 to-blue-950 text-white shadow-2xl">

      <div className="flex items-start justify-between border-b border-white/10 px-8 py-6">

        <div>

          <div className="text-xs font-semibold uppercase tracking-[0.35em] text-cyan-300">

            InsightFlow AI

          </div>

          <h1 className="mt-2 text-4xl font-black">

            Panel ejecutivo

          </h1>

          <div className="mt-2 text-xl font-semibold text-cyan-200">

            {title}

          </div>

          <p className="mt-4 max-w-3xl text-base leading-7 text-slate-300">

            InsightFlow analiza automáticamente la actividad registrada en Notion y la transforma en información ejecutiva para facilitar la toma de decisiones.

          </p>

          <div className="mt-5 flex flex-wrap gap-2">

            <Badge>🟢 {participants} participantes</Badge>
            <Badge>⚡ {events} eventos</Badge>
            <Badge>📦 {deliveries} entregas</Badge>
            <Badge>🚀 {publications} publicaciones</Badge>

          </div>

        </div>

        <div className="rounded-2xl border border-cyan-400/20 bg-cyan-400/10 p-5">

          <div className="text-xs uppercase tracking-widest text-cyan-200">

            Estado

          </div>

          <div className="mt-3 space-y-2 text-sm">

            <div>✅ Datos sincronizados</div>
            <div>🤖 IA preparada</div>
            <div>🕒 {lastSync}</div>

          </div>

        </div>

      </div>

      <div className="grid grid-cols-4 divide-x divide-white/10">

        <Metric
          icon="⚡"
          value={events}
          label="Eventos"
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

      <div className="flex items-center justify-between border-t border-white/10 bg-black/20 px-8 py-4">

        <div className="flex flex-wrap gap-2">

          <EngineBadge>Cronología</EngineBadge>
          <EngineBadge>AI Análisis</EngineBadge>
          <EngineBadge>Espacio de trabajo</EngineBadge>
          <EngineBadge>Analítica</EngineBadge>

        </div>

        <div className="text-sm text-slate-300">

          <strong>{activity.length}</strong> responsables detectados

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

    <div className="p-6">

      <div className="text-3xl">

        {icon}

      </div>

      <div className="mt-3 text-4xl font-black">

        {value}

      </div>

      <div className="mt-1 text-sm text-slate-300">

        {label}

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

function EngineBadge({
  children,
}: {
  children: React.ReactNode;
}) {

  return (

    <div className="rounded-full border border-cyan-400/20 bg-cyan-400/10 px-3 py-1 text-xs uppercase tracking-wider text-cyan-200">

      {children}

    </div>

  );

}