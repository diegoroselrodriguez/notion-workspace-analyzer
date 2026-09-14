type Project = {

  id: string;

  name: string;

  status: string;

};

type Props = {

  selected: string;

  onSelect: (id: string) => void;

};

const projects: Project[] = [

  {
    id: "resultados",
    name: "Resultados H1 2026",
    status: "🟢",
  },

  {
    id: "portabilidades",
    name: "Portabilidades",
    status: "🟢",
  },

];

export default function ProjectsSidebar({

  selected,

  onSelect,

}: Props) {

  return (

    <div className="py-4">

      <div className="mb-6">

        <div className="text-xs font-bold uppercase tracking-[0.3em] text-slate-500">

          Proyectos

        </div>

      </div>

      <div className="space-y-2">

        {projects.map(project => (

          <button
            key={project.id}
            onClick={() => onSelect(project.id)}
            className={`
              group
              flex
              w-full
              items-center
              justify-between
              rounded-2xl
              px-4
              py-4
              text-left
              transition-all
              duration-300

              ${
                selected === project.id
                  ? "bg-gradient-to-r from-blue-600 to-blue-500 text-white shadow-lg"
                  : "bg-transparent text-slate-300 hover:bg-slate-800"
              }
            `}
          >

            <div>

              <div className="font-semibold">

                {project.name}

              </div>

            </div>

            <div className="text-lg">

              {project.status}

            </div>

          </button>

        ))}

      </div>

    </div>

  );

}