import type { TimelineEvent } from "../../../types/dashboard";

type Props = {
  events: TimelineEvent[];
};

export default function TimelineSummary({ events }: Props) {

  const grouped = events.reduce((acc, event) => {

    const day = event.date.split(",")[0];

    if (!acc[day]) {

      acc[day] = {
        comments: 0,
        assignments: 0,
        deliveries: 0,
        publications: 0,
      };

    }

    switch (event.type) {

      case "assignment":
        acc[day].assignments++;
        break;

      case "delivery":
        acc[day].deliveries++;
        break;

      case "publication":
        acc[day].publications++;
        break;

      default:
        acc[day].comments++;
        break;

    }

    return acc;

  }, {} as Record<
    string,
    {
      comments: number;
      assignments: number;
      deliveries: number;
      publications: number;
    }
  >);

  return (

    <div className="rounded-3xl bg-white p-8 shadow">

      <h2 className="text-2xl font-bold">
        📅 Actividad por día
      </h2>

      <p className="mt-2 text-slate-500">
        Resumen automático de la evolución del proyecto.
      </p>

      <div className="mt-8 space-y-5">

        {Object.entries(grouped).map(([day, data]) => (

          <div
            key={day}
            className="rounded-2xl border border-slate-200 p-5"
          >

            <div className="mb-4 text-lg font-bold">

              {day}

            </div>

            <div className="grid grid-cols-4 gap-3">

              <div className="rounded-xl bg-slate-50 p-3 text-center">

                <div className="text-2xl">💬</div>

                <div className="mt-2 font-bold">

                  {data.comments}

                </div>

              </div>

              <div className="rounded-xl bg-blue-50 p-3 text-center">

                <div className="text-2xl">👤</div>

                <div className="mt-2 font-bold">

                  {data.assignments}

                </div>

              </div>

              <div className="rounded-xl bg-orange-50 p-3 text-center">

                <div className="text-2xl">📦</div>

                <div className="mt-2 font-bold">

                  {data.deliveries}

                </div>

              </div>

              <div className="rounded-xl bg-green-50 p-3 text-center">

                <div className="text-2xl">🚀</div>

                <div className="mt-2 font-bold">

                  {data.publications}

                </div>

              </div>

            </div>

          </div>

        ))}

      </div>

    </div>

  );

}