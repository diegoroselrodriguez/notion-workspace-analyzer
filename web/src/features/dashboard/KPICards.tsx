import type { KPI } from "../../types/dashboard";

type Props = {
  items: KPI[];
};

function icon(label: string) {

  switch (label) {

    case "Eventos":
      return "⚡";

    case "Participantes":
      return "👥";

    case "Asignaciones":
      return "📋";

    case "Entregas":
      return "📦";

    case "Publicaciones":
      return "🚀";

    case "Días":
      return "📅";

    default:
      return "📊";

  }

}

function color(label: string) {

  switch (label) {

    case "Eventos":
      return "from-blue-500 to-cyan-500";

    case "Participantes":
      return "from-violet-500 to-fuchsia-500";

    case "Asignaciones":
      return "from-orange-500 to-amber-500";

    case "Entregas":
      return "from-emerald-500 to-green-500";

    case "Publicaciones":
      return "from-pink-500 to-rose-500";

    case "Días":
      return "from-slate-600 to-slate-800";

    default:
      return "from-blue-500 to-indigo-500";

  }

}

export default function KPICards({ items }: Props) {

  return (

    <div className="grid grid-cols-6 gap-6">

      {items.map(item => (

        <div
          key={item.label}
          className="overflow-hidden rounded-3xl bg-white shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl"
        >

          <div
            className={`h-2 bg-gradient-to-r ${color(item.label)}`}
          />

          <div className="p-6">

            <div className="flex items-center justify-between">

              <div className="text-4xl">

                {icon(item.label)}

              </div>

              <div className="text-xs font-semibold uppercase tracking-widest text-slate-400">

                KPI

              </div>

            </div>

            <div className="mt-6 text-5xl font-black text-slate-900">

              {item.value}

            </div>

            <div className="mt-3 font-medium text-slate-500">

              {item.label}

            </div>

          </div>

        </div>

      ))}

    </div>

  );

}