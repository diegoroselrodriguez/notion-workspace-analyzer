type Props = {
  title: string;
  status: string;
  summary: string;
  insights: string[];
};

export default function ExecutiveSummary({
  title,
  status,
  summary,
  insights,
}: Props) {

  return (

    <div className="overflow-hidden rounded-2xl bg-white shadow-xl">

      <div className="border-b border-slate-200 bg-gradient-to-r from-slate-950 via-slate-900 to-blue-950 px-8 py-6 text-white">

        <div className="flex items-center justify-between">

          <div>

            <div className="text-xs font-bold uppercase tracking-[0.35em] text-cyan-300">

              ANÁLISIS MEDIANTE IA

            </div>

            <h2 className="mt-2 text-3xl font-black">

              Resumen ejecutivo

            </h2>

            <p className="mt-3 max-w-3xl leading-7 text-slate-300">

              {summary}

            </p>

          </div>

          <div className="rounded-2xl border border-cyan-400/20 bg-cyan-400/10 p-5">

            <div className="text-xs uppercase tracking-widest text-cyan-300">

              Proyecto

            </div>

            <div className="mt-2 text-lg font-bold">

              {title}

            </div>

            <div className="mt-4 text-xs uppercase tracking-widest text-cyan-300">

              Estado

            </div>

            <div className="mt-2 font-semibold">

              {status}

            </div>

          </div>

        </div>

      </div>

      <div className="grid grid-cols-12 gap-6 p-6">

        <div className="col-span-8">

          <div className="space-y-4">

            {insights.map((item, index) => (

              <div
                key={index}
                className="flex gap-4 rounded-xl border border-slate-200 bg-slate-50 p-4">

                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-600 text-white">

                  {["📊","👥","📦","🚀","💡","⚠️"][index] ?? "🧠"}

                </div>

                <div>

                  <div className="font-bold">

                    Insight {index + 1}

                  </div>

                  <div className="mt-1 leading-7 text-slate-600">

                    {item}

                  </div>

                </div>

              </div>

            ))}

          </div>

        </div>

        <div className="col-span-4">

          <div className="rounded-2xl border border-green-200 bg-green-50 p-5">

            <div className="text-sm font-bold uppercase tracking-widest text-green-700">

              Estado del proyecto

            </div>

            <div className="mt-4 text-2xl font-black text-green-700">

              🟢 Ejecución estable

            </div>

            <div className="mt-5 space-y-3 text-sm">

              <div>✅ Actividad reciente detectada</div>
              <div>✅ Participación del equipo</div>
              <div>✅ Entregas registradas</div>
              <div>✅ Publicaciones registradas</div>

            </div>

          </div>

          <div className="mt-5 rounded-2xl border border-blue-200 bg-blue-50 p-5">

            <div className="text-sm font-bold uppercase tracking-widest text-blue-700">

              Recomendaciones

            </div>

            <div className="mt-4 space-y-3 text-sm leading-6">

              <div>• Mantener el ritmo actual del proyecto.</div>

              <div>• Continuar registrando la actividad en Notion.</div>

              <div>• Revisar periódicamente la carga del equipo.</div>

            </div>

          </div>

        </div>

      </div>

    </div>

  );

}