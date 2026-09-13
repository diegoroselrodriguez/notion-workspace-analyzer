import type { TimelineEvent } from "../../types/dashboard";

type Props = {
  events: TimelineEvent[];
};

function icon(type: TimelineEvent["type"]) {

  switch (type) {

    case "assignment":
      return "👤";

    case "delivery":
      return "📦";

    case "publication":
      return "🚀";

    default:
      return "💬";

  }

}

function color(type: TimelineEvent["type"]) {

  switch (type) {

    case "assignment":
      return "from-blue-500 to-cyan-500";

    case "delivery":
      return "from-orange-500 to-amber-500";

    case "publication":
      return "from-green-500 to-emerald-500";

    default:
      return "from-slate-500 to-slate-600";

  }

}

function title(type: TimelineEvent["type"]) {

  switch (type) {

    case "assignment":
      return "Asignación";

    case "delivery":
      return "Entrega";

    case "publication":
      return "Publicación";

    default:
      return "Comentario";

  }

}

export default function ProjectTimeline({ events }: Props) {

  return (

    <div className="rounded-3xl bg-white shadow-xl overflow-hidden">

      <div className="border-b border-slate-200 bg-gradient-to-r from-slate-900 to-slate-800 px-8 py-6">

        <h2 className="text-3xl font-bold text-white">

          🕒 Timeline Intelligence

        </h2>

        <p className="mt-2 text-slate-300">

          Historia reconstruida automáticamente desde Notion.

        </p>

      </div>

      <div className="p-8">

        <div className="relative">

          <div className="absolute left-6 top-0 bottom-0 w-1 rounded-full bg-slate-200" />

          {events.map((event, index) => (

            <div
              key={`${event.author}-${event.date}-${index}`}
              className="relative mb-8 flex gap-6"
            >

              <div
                className={`relative z-10 flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-gradient-to-br ${color(event.type)} text-2xl shadow-xl`}
              >

                {icon(event.type)}

              </div>

              <div className="flex-1">

                <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-blue-300 hover:shadow-xl">

                  <div className="flex items-start justify-between">

                    <div>

                      <div className="text-xs font-bold uppercase tracking-[0.25em] text-blue-600">

                        {title(event.type)}

                      </div>

                      <h3 className="mt-2 text-xl font-bold text-slate-900">

                        {event.author}

                      </h3>

                    </div>

                    <div className="rounded-full bg-slate-100 px-4 py-2 text-sm font-medium text-slate-500">

                      {event.date}

                    </div>

                  </div>

                  <div className="mt-5 leading-8 text-slate-700">

                    {event.description}

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