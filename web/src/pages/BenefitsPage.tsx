export default function BenefitsPage() {

  const benefits = [
    {
      icon: "⏱️",
      title: "Ahorro de tiempo",
      description: "Evita revisar cientos de comentarios en Notion para conocer el estado real de un proyecto."
    },
    {
      icon: "👥",
      title: "Mayor visibilidad",
      description: "Permite conocer quién participa, cuándo y cuánto aporta cada miembro del equipo."
    },
    {
      icon: "📊",
      title: "Seguimiento ejecutivo",
      description: "Toda la información del proyecto resumida en un único panel."
    },
    {
      icon: "🤖",
      title: "Información automática",
      description: "Los datos se generan automáticamente a partir de la actividad registrada en Notion."
    },
    {
      icon: "⚡",
      title: "Detección de incidencias",
      description: "Identifica proyectos con poca actividad o posibles bloqueos."
    },
    {
      icon: "📈",
      title: "Mejor toma de decisiones",
      description: "La dirección dispone de información clara sin depender de reuniones o seguimientos manuales."
    }
  ];

  return (

    <div className="space-y-6 p-6">

      <div className="rounded-2xl bg-gradient-to-br from-slate-950 via-slate-900 to-blue-950 p-8 text-white shadow-xl">

        <div className="text-xs font-bold uppercase tracking-[0.35em] text-cyan-300">

          InsightFlow

        </div>

        <h1 className="mt-2 text-4xl font-black">

          Beneficios para Marketing

        </h1>

        <p className="mt-4 max-w-4xl leading-7 text-slate-300">

          InsightFlow convierte la actividad diaria registrada en Notion en información útil para responsables, equipos y dirección.

        </p>

      </div>

      <div className="grid grid-cols-2 gap-5">

        {benefits.map(item => (

          <div
            key={item.title}
            className="rounded-2xl border border-slate-200 bg-white p-6 shadow transition hover:-translate-y-1 hover:shadow-lg">

            <div className="text-5xl">

              {item.icon}

            </div>

            <h2 className="mt-4 text-2xl font-bold">

              {item.title}

            </h2>

            <p className="mt-3 leading-7 text-slate-600">

              {item.description}

            </p>

          </div>

        ))}

      </div>

      <div className="rounded-2xl bg-blue-600 p-8 text-center text-white shadow-xl">

        <h2 className="text-3xl font-black">

          Menos tiempo buscando información. Más tiempo tomando decisiones.

        </h2>

      </div>

    </div>

  );

}