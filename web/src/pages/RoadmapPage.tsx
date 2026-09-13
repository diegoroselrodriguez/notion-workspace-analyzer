export default function RoadmapPage() {

  const items = [
    {
      icon: "🤖",
      title: "Resúmenes automáticos con IA",
      description: "Generación automática de informes ejecutivos y conclusiones del proyecto."
    },
    {
      icon: "📧",
      title: "Integración con Outlook",
      description: "Relacionar correos electrónicos con la actividad de los proyectos."
    },
    {
      icon: "📊",
      title: "Cuadro de mando para Dirección",
      description: "Vista global del rendimiento de Marketing y carga del equipo."
    },
    {
      icon: "🔔",
      title: "Alertas inteligentes",
      description: "Detectar automáticamente proyectos bloqueados o sin actividad."
    },
    {
      icon: "📅",
      title: "Predicción de fechas",
      description: "Estimación automática de entregas mediante IA."
    },
    {
      icon: "💬",
      title: "Asistente conversacional",
      description: "Consultar cualquier proyecto utilizando lenguaje natural."
    }
  ];

  return (

    <div className="space-y-6 p-6">

      <div className="rounded-2xl bg-gradient-to-br from-slate-950 via-slate-900 to-blue-950 p-8 text-white shadow-xl">

        <div className="text-xs font-bold uppercase tracking-[0.35em] text-cyan-300">

          InsightFlow

        </div>

        <h1 className="mt-2 text-4xl font-black">

          Evolución del producto

        </h1>

        <p className="mt-4 max-w-3xl leading-7 text-slate-300">

          Funcionalidades previstas para convertir InsightFlow en la plataforma de inteligencia del departamento de Marketing.

        </p>

      </div>

      <div className="grid grid-cols-2 gap-5">

        {items.map(item => (

          <div
            key={item.title}
            className="rounded-2xl border border-slate-200 bg-white p-6 shadow transition hover:-translate-y-1 hover:shadow-lg">

            <div className="text-4xl">

              {item.icon}

            </div>

            <h2 className="mt-4 text-xl font-bold">

              {item.title}

            </h2>

            <p className="mt-3 leading-7 text-slate-600">

              {item.description}

            </p>

          </div>

        ))}

      </div>

    </div>

  );

}