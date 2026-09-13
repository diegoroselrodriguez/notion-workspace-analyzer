type Props = {
  project: string;
  lastSync: string;
};

export default function NotionStatus({
  project,
  lastSync,
}: Props) {

  return (

    <div className="rounded-2xl border border-blue-100 bg-blue-50 px-6 py-4">

      <div className="flex items-center justify-between">

        <div className="flex items-center gap-8">

          <div>

            <div className="text-xs font-bold uppercase tracking-widest text-blue-600">

              ORIGEN DE LOS DATOS

            </div>

            <div className="mt-1 flex items-center gap-2 font-semibold">

              <span className="text-green-600">

                ●

              </span>

              Conectado con Notion

            </div>

          </div>

          <div>

            <div className="text-xs text-slate-500">

              Proyecto

            </div>

            <div className="font-semibold">

              {project}

            </div>

          </div>

          <div>

            <div className="text-xs text-slate-500">

              Última sincronización

            </div>

            <div className="font-semibold">

              {lastSync}

            </div>

          </div>

        </div>

        <div className="rounded-xl bg-white px-4 py-2 text-sm font-medium shadow-sm">

          Datos reales

        </div>

      </div>

    </div>

  );

}