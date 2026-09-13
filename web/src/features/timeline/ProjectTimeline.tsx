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
      return "bg-blue-500";

    case "delivery":
      return "bg-orange-500";

    case "publication":
      return "bg-green-500";

    default:
      return "bg-slate-500";

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

    <div className="rounded-3xl bg-white p-8 shadow">

      <div className="mb-8">

        <h2 className="text-2xl font-bold">

          🕒 Historia del proyecto

        </h2>

        <p className="mt-2 text-slate-500">

          Secuencia de eventos reconstruida automáticamente desde Notion.

        </p>

      </div>

      <div className="space-y-2">

        {events.map((event, index) => (

          <div
            key={index}
            className="relative flex gap-5 pb-6"
          >

            <div className="flex flex-col items-center">

              <div
                className={`flex h-11 w-11 items-center justify-center rounded-full text-lg text-white shadow ${color(event.type)}`}
              >

                {icon(event.type)}

              </div>

              {index < events.length - 1 && (

                <div className="mt-2 h-full w-0.5 bg-slate-200" />

              )}

            </div>

            <div className="flex-1 rounded-2xl border border-slate-200 bg-slate-50 p-5 transition hover:border-blue-300 hover:bg-white">

              <div className="flex items-center justify-between">

                <div>

                  <div className="text-xs font-semibold uppercase tracking-wider text-slate-500">

                    {title(event.type)}

                  </div>

                  <div className="mt-1 text-lg font-bold">

                    {event.author}

                  </div>

                </div>

                <div className="rounded-full bg-white px-3 py-1 text-sm text-slate-500 shadow-sm">

                  {event.date}

                </div>

              </div>

              <div className="mt-4 leading-7 text-slate-700">

                {event.description}

              </div>

            </div>

          </div>

        ))}

      </div>

    </div>

  );

}