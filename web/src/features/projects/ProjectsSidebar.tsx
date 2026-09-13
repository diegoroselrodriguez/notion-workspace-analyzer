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
    id: "diginews",
    name: "DIGI News",
    status: "🟡",
  },

  {
    id: "portabilidades",
    name: "Portabilidades",
    status: "🟢",
  },

  {
    id: "fantasy",
    name: "Fantasy DIGI",
    status: "🔵",
  },

];

export default function ProjectsSidebar({

  selected,

  onSelect,

}: Props) {

  return (

    <div className="p-7">

      <h1 className="text-4xl font-bold text-white">

        🚀 InsightFlow

      </h1>

      <p className="mt-2 text-slate-400">

        Marketing Intelligence

      </p>

      <div className="mt-12">

        <div className="mb-4 text-xs uppercase tracking-widest text-slate-500">

          Proyectos

        </div>

        <div className="space-y-3">

          {projects.map(project => (

            <button
              key={project.id}
              onClick={() => onSelect(project.id)}
              className={`
                flex
                w-full
                items-center
                justify-between
                rounded-xl
                px-4
                py-3
                text-left
                transition

                ${
                  selected === project.id
                    ? "bg-blue-600 text-white"
                    : "text-slate-300 hover:bg-slate-800"
                }
              `}
            >

              <span>

                {project.name}

              </span>

              <span>

                {project.status}

              </span>

            </button>

          ))}

        </div>

      </div>

    </div>

  );

}