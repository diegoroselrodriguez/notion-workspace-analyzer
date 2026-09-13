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

export default function KPICards({ items }: Props) {

  return (

    <div className="grid grid-cols-6 gap-4">

      {items.map(item => (

        <div
          key={item.label}
          className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition hover:border-blue-300 hover:shadow-md"
        >

          <div className="h-1 bg-gradient-to-r from-blue-600 to-blue-500" />

          <div className="p-4">

            <div className="flex items-center justify-between">

              <div className="text-2xl">

                {icon(item.label)}

              </div>

            </div>

            <div className="mt-3 text-4xl font-black text-slate-900">

              {item.value}

            </div>

            <div className="mt-1 text-sm font-medium text-slate-500">

              {item.label}

            </div>

          </div>

        </div>

      ))}

    </div>

  );

}