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

    <div className="space-y-6">

      <div className="rounded-3xl bg-gradient-to-r from-slate-900 via-blue-900 to-indigo-900 p-8 text-white shadow-xl">

        <div className="flex items-center justify-between">

          <div>

            <div className="text-sm uppercase tracking-widest text-blue-200">

              InsightFlow AI Engine

            </div>

            <h1 className="mt-3 text-5xl font-bold">

              {title}

            </h1>

            <p className="mt-4 max-w-4xl text-lg text-slate-200">

              {summary}

            </p>

          </div>

          <div className="rounded-3xl bg-white/10 p-6 text-center backdrop-blur">

            <div className="text-xs uppercase tracking-widest text-blue-100">

              Estado

            </div>

            <div className="mt-2 text-3xl font-bold">

              {status}

            </div>

            <div className="mt-6 text-5xl">

              🧠

            </div>

            <div className="mt-2 text-sm text-blue-100">

              AI Analysis

            </div>

          </div>

        </div>

      </div>

      <div className="rounded-3xl bg-white p-8 shadow">

        <div className="mb-8 flex items-center gap-4">

          <div className="flex h-16 w-16 items-center justify-center rounded-3xl bg-blue-100 text-4xl">

            🤖

          </div>

          <div>

            <h2 className="text-3xl font-bold">

              InsightFlow AI Analysis

            </h2>

            <p className="text-slate-500">

              Conclusiones generadas automáticamente analizando la actividad registrada en Notion.

            </p>

          </div>

        </div>

        <div className="grid gap-4">

          {insights.map((insight, index) => (

            <div
              key={index}
              className="rounded-2xl border border-slate-200 bg-gradient-to-r from-white to-slate-50 p-5 shadow-sm transition-all duration-200 hover:shadow-md"
            >

              <div className="flex items-start gap-4">

                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-blue-100 text-2xl">

                  🧠

                </div>

                <div>

                  <div className="font-semibold text-slate-900">

                    Insight {index + 1}

                  </div>

                  <div className="mt-1 leading-7 text-slate-600">

                    {insight}

                  </div>

                </div>

              </div>

            </div>

          ))}

        </div>

      </div>

    </div>

  );

}