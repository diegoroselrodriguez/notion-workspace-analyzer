import type {
  ActivityMember,
  KPI,
  ProjectInsight,
} from "../../../types/dashboard";

type Props = {
  kpis: KPI[];
  activity: ActivityMember[];
  insights?: ProjectInsight[];
};

export default function ProjectInsights({
  kpis,
  activity,
  insights,
}: Props) {

  if (insights && insights.length > 0) {

    return (
      <div className="rounded-3xl bg-white p-8 shadow">

        <h2 className="text-2xl font-bold">
          🧠 InsightFlow detectó
        </h2>

        <div className="mt-6 space-y-5">

          {insights.map((item, index) => (

            <div
              key={index}
              className="flex gap-4 rounded-2xl border border-slate-200 p-4"
            >

              <div className="text-3xl">
                {item.icon}
              </div>

              <div>

                <div className="font-semibold">
                  {item.title}
                </div>

                <div className="mt-1 text-slate-600">
                  {item.description}
                </div>

              </div>

            </div>

          ))}

        </div>

      </div>
    );

  }

  const events =
    kpis.find(k => k.label === "Eventos")?.value ?? 0;

  const participants =
    kpis.find(k => k.label === "Participantes")?.value ?? 0;

  const leader = activity[0];

  const leaderPercent =
    leader && events > 0
      ? Math.round((leader.events / events) * 100)
      : 0;

  const generatedInsights: ProjectInsight[] = [

    {
      icon: "🤖",
      title: "Proyecto reconstruido",
      description:
        `InsightFlow reconstruyó automáticamente ${events} eventos registrados en Notion.`,
    },

    {
      icon: "👥",
      title: "Participantes detectados",
      description:
        `Se detectaron ${participants} participantes durante el proyecto.`,
    },

  ];

  if (leader) {

    generatedInsights.push({

      icon: "⭐",

      title: "Mayor participación",

      description:
        `${leader.name} concentró el ${leaderPercent}% de la actividad.`,

    });

  }

  if (leaderPercent >= 40) {

    generatedInsights.push({

      icon: "⚠️",

      title: "Actividad concentrada",

      description:
        "Gran parte del trabajo recayó sobre una única persona.",

    });

  }

  return (

    <div className="rounded-3xl bg-white p-8 shadow">

      <h2 className="text-2xl font-bold">
        🧠 InsightFlow detectó
      </h2>

      <div className="mt-6 space-y-5">

        {generatedInsights.map((item, index) => (

          <div
            key={index}
            className="flex gap-4 rounded-2xl border border-slate-200 p-4"
          >

            <div className="text-3xl">
              {item.icon}
            </div>

            <div>

              <div className="font-semibold">
                {item.title}
              </div>

              <div className="mt-1 text-slate-600">
                {item.description}
              </div>

            </div>

          </div>

        ))}

      </div>

    </div>

  );

}