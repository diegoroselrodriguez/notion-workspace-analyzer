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

    case "publication_request":
      return "📤";

    case "publication_completed":
      return "🚀";

    case "review_request":
      return "🧐";

    case "review_completed":
      return "✅";

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

    case "publication_request":
      return "bg-violet-500";

    case "publication_completed":
      return "bg-green-500";

    case "review_request":
      return "bg-amber-500";

    case "review_completed":
      return "bg-emerald-500";

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

    case "publication_request":
      return "Solicitud de publicación";

    case "publication_completed":
      return "Publicación completada";

    case "review_request":
      return "Solicitud de revisión";

    case "review_completed":
      return "Revisión completada";

    default:
      return "Comentario";

  }

}

export default function ProjectTimeline({
  events
}: Props) {

  return (

    <div className="rounded-2xl bg-white shadow-xl">

      <div className="border-b border-slate-200 px-6 py-4">

        <h2 className="text-xl font-bold">

          Cronología del proyecto

        </h2>

        <p className="mt-1 text-sm text-slate-500">

          Secuencia reconstruida automáticamente a partir de la actividad registrada en Notion.

        </p>

      </div>

      <div className="max-h-[700px] overflow-y-auto p-6">

        <div className="space-y-5">

          {events.map((event, index) => (

            <div
              key={index}
              className="relative flex gap-5"
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

              <div className="flex-1 rounded-xl border border-slate-200 p-4 transition hover:border-blue-300 hover:bg-slate-50">

                <div className="flex items-center justify-between">

                  <div>

                    <div className="text-xs font-bold uppercase tracking-widest text-slate-500">

                      {title(event.type)}

                    </div>

                    <div className="mt-1 font-semibold">

                      {event.author}

                    </div>

                  </div>

                  <div className="rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-600">

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

    </div>

  );

}