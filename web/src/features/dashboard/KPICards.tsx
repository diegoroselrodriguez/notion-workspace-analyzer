import type { KPI } from "../../types/dashboard";

type Props = {
  items: KPI[];
};

export default function KPICards({ items }: Props) {

  return (

    <div className="grid grid-cols-6 gap-6">

      {items.map(item => (

        <div
          key={item.label}
          className="
            rounded-2xl
            border
            border-slate-200
            bg-white
            p-6
            shadow-sm
            transition
            hover:-translate-y-1
            hover:shadow-xl
          "
        >

          <div className="text-5xl font-bold text-blue-600">

            {item.value}

          </div>

          <div className="mt-3 text-slate-500">

            {item.label}

          </div>

        </div>

      ))}

    </div>

  );

}