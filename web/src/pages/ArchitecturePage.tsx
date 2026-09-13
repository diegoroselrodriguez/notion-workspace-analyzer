export default function ArchitecturePage() {

  return (

    <div className="space-y-6 p-6">

      <div className="rounded-2xl bg-gradient-to-br from-slate-950 via-slate-900 to-blue-950 p-8 text-white shadow-xl">

        <div className="text-xs font-bold uppercase tracking-[0.35em] text-cyan-300">

          InsightFlow

        </div>

        <h1 className="mt-2 text-4xl font-black">

          Cómo funciona

        </h1>

        <p className="mt-4 max-w-4xl text-slate-300 leading-7">

          InsightFlow transforma automáticamente la actividad registrada en Notion en información ejecutiva para facilitar el seguimiento de proyectos y la toma de decisiones.

        </p>

      </div>

      <div className="rounded-2xl bg-white p-8 shadow-xl">

        <div className="flex flex-col items-center space-y-6">

          <FlowBox title="Notion" color="bg-black" />

          <Arrow />

          <div className="grid grid-cols-3 gap-6">

            <FlowBox title="Comentarios" />

            <FlowBox title="Propiedades" />

            <FlowBox title="Personas" />

          </div>

          <Arrow />

          <FlowBox title="Motor de análisis" color="bg-blue-600" />

          <Arrow />

          <div className="grid grid-cols-3 gap-6">

            <FlowBox title="Cronología" />

            <FlowBox title="Actividad" />

            <FlowBox title="Métricas" />

          </div>

          <Arrow />

          <FlowBox title="Panel ejecutivo" color="bg-green-600" />

        </div>

      </div>

      <div className="grid grid-cols-3 gap-5">

        <Card
          title="Información analizada"
          items={[
            "Comentarios",
            "Propiedades",
            "Participantes",
            "Estados",
            "Asignaciones",
            "Entregas",
            "Publicaciones"
          ]}
        />

        <Card
          title="Tecnologías"
          items={[
            "React",
            "TypeScript",
            "Tailwind",
            "Express",
            "Notion API",
            "Clean Architecture"
          ]}
        />

        <Card
          title="Resultado"
          items={[
            "Dashboard",
            "Resumen ejecutivo",
            "Cronología",
            "KPIs",
            "Actividad",
            "Asistente IA"
          ]}
        />

      </div>

      <div className="rounded-2xl bg-blue-600 p-8 text-center text-white shadow-xl">

        <h2 className="text-3xl font-black">

          InsightFlow convierte la información operativa de Notion en conocimiento útil para la toma de decisiones.

        </h2>

      </div>

    </div>

  );

}

function Arrow() {

  return (

    <div className="text-4xl text-slate-400">

      ↓

    </div>

  );

}

function FlowBox({
  title,
  color = "bg-slate-100"
}: {
  title: string;
  color?: string;
}) {

  const dark =
    color !== "bg-slate-100";

  return (

    <div className={`${color} rounded-2xl px-8 py-5 shadow`}>

      <div className={`${dark ? "text-white" : "text-slate-800"} text-lg font-bold`}>

        {title}

      </div>

    </div>

  );

}

function Card({
  title,
  items
}: {
  title: string;
  items: string[];
}) {

  return (

    <div className="rounded-2xl bg-white p-6 shadow-xl">

      <h3 className="text-xl font-bold">

        {title}

      </h3>

      <div className="mt-5 space-y-3">

        {items.map(item => (

          <div key={item}>

            ✅ {item}

          </div>

        ))}

      </div>

    </div>

  );

}