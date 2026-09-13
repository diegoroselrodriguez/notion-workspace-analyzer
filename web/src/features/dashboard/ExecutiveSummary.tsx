type Props = {
  title: string;
  status: string;
  summary: string;
};

export default function ExecutiveSummary({
  title,
  status,
  summary,
}: Props) {

  return (

    <div className="space-y-6">

      <div className="rounded-3xl bg-gradient-to-r from-slate-900 via-blue-900 to-indigo-900 p-8 text-white shadow-xl">

        <div className="flex items-start justify-between">

          <div>

            <p className="text-sm uppercase tracking-[0.25em] text-blue-200">
              InsightFlow AI Engine
            </p>

            <h1 className="mt-3 text-4xl font-bold">
              {title}
            </h1>

            <p className="mt-3 max-w-3xl text-blue-100">
              El sistema ha reconstruido automáticamente la historia completa del proyecto analizando la actividad registrada en Notion.
            </p>

          </div>

          <div className="rounded-full bg-emerald-500/20 px-5 py-2 text-sm font-semibold text-emerald-300">
            ● {status}
          </div>

        </div>

        <div className="mt-8 grid grid-cols-4 gap-4">

          <div className="rounded-2xl bg-white/10 p-5 backdrop-blur">
            <p className="text-sm text-blue-200">
              Estado
            </p>
            <p className="mt-2 text-xl font-bold">
              Proyecto analizado
            </p>
          </div>

          <div className="rounded-2xl bg-white/10 p-5 backdrop-blur">
            <p className="text-sm text-blue-200">
              Origen
            </p>
            <p className="mt-2 text-xl font-bold">
              Notion
            </p>
          </div>

          <div className="rounded-2xl bg-white/10 p-5 backdrop-blur">
            <p className="text-sm text-blue-200">
              Reconstrucción
            </p>
            <p className="mt-2 text-xl font-bold">
              Automática
            </p>
          </div>

          <div className="rounded-2xl bg-white/10 p-5 backdrop-blur">
            <p className="text-sm text-blue-200">
              Motor
            </p>
            <p className="mt-2 text-xl font-bold">
              InsightFlow
            </p>
          </div>

        </div>

      </div>

      <div className="grid gap-6 lg:grid-cols-[2fr_1fr]">

        <div className="rounded-3xl bg-white p-8 shadow">

          <h2 className="text-2xl font-bold">
            Executive Summary
          </h2>

          <p className="mt-6 leading-8 text-slate-700">
            {summary}
          </p>

        </div>

        <div className="rounded-3xl bg-white p-8 shadow">

          <h2 className="text-xl font-bold">
            InsightFlow detectó
          </h2>

          <div className="mt-6 space-y-4">

            <div className="flex items-center gap-3">
              <span className="text-emerald-500">✓</span>
              <span>Proyecto reconstruido automáticamente</span>
            </div>

            <div className="flex items-center gap-3">
              <span className="text-emerald-500">✓</span>
              <span>Actividad procesada desde Notion</span>
            </div>

            <div className="flex items-center gap-3">
              <span className="text-emerald-500">✓</span>
              <span>Cronología generada automáticamente</span>
            </div>

            <div className="flex items-center gap-3">
              <span className="text-emerald-500">✓</span>
              <span>Participantes identificados</span>
            </div>

          </div>

        </div>

      </div>

    </div>

  );

}