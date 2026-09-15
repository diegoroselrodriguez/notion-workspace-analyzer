import { useEffect, useMemo, useState } from "react";

import {
  ProjectsService,
  type ProjectSummary,
} from "../../services/projects.service";

type Props = {
  selected: string;
  onSelect: (id: string) => void;
};

export default function ProjectsSidebar({
  selected,
  onSelect,
}: Props) {

  const [projects, setProjects] =
    useState<ProjectSummary[]>([]);

  const [search, setSearch] =
    useState("");

  const [loading, setLoading] =
    useState(true);

  const [error, setError] =
    useState<string | null>(null);

  useEffect(() => {

    async function loadProjects() {

      try {

        setLoading(true);
        setError(null);

        const data =
          await ProjectsService.getProjects();

        setProjects(data);

      } catch (err) {

        console.error(
          "Error cargando proyectos:",
          err
        );

        setError(
          "No se pudieron cargar los proyectos."
        );

      } finally {

        setLoading(false);

      }

    }

    loadProjects();

  }, []);

  const filteredProjects =
    useMemo(() => {

      const term =
        search.trim().toLowerCase();

      if (!term) {
        return projects;
      }

      return projects.filter(project =>
        project.name
          .toLowerCase()
          .includes(term)
      );

    }, [projects, search]);

  return (

    <div className="py-4">

      <div className="mb-4">

        <div className="flex items-center justify-between">

          <div className="text-xs font-bold uppercase tracking-[0.3em] text-slate-500">

            Proyectos

          </div>

          {!loading && !error && (

            <div className="rounded-full bg-slate-800 px-2 py-1 text-[10px] font-bold text-slate-400">

              {projects.length}

            </div>

          )}

        </div>

        <div className="mt-4">

          <input
            type="text"
            value={search}
            onChange={(event) =>
              setSearch(event.target.value)
            }
            placeholder="Buscar proyecto..."
            className="
              w-full
              rounded-xl
              border
              border-slate-700
              bg-slate-900
              px-4
              py-3
              text-sm
              text-white
              outline-none
              transition
              placeholder:text-slate-500
              focus:border-blue-500
            "
          />

        </div>

      </div>

      {loading && (

        <div className="rounded-xl bg-slate-800 px-4 py-4 text-sm text-slate-400">

          Cargando proyectos...

        </div>

      )}

      {error && (

        <div className="rounded-xl border border-red-900 bg-red-950/40 px-4 py-4 text-sm text-red-300">

          {error}

        </div>

      )}

      {!loading &&
       !error &&
       filteredProjects.length === 0 && (

        <div className="rounded-xl bg-slate-800 px-4 py-4 text-sm text-slate-400">

          No se encontraron proyectos.

        </div>

      )}

      {!loading &&
       !error &&
       filteredProjects.length > 0 && (

        <div className="space-y-2">

          {filteredProjects.map(project => (

            <button
              key={project.id}
              onClick={() =>
                onSelect(project.id)
              }
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

              <div className="min-w-0">

                <div className="truncate font-semibold">

                  {project.name}

                </div>

                <div
                  className={`mt-1 text-[10px] ${
                    selected === project.id
                      ? "text-blue-100"
                      : "text-slate-500"
                  }`}
                >

                  {formatDate(
                    project.lastEditedTime
                  )}

                </div>

              </div>

              <div className="ml-3 text-sm">

                {selected === project.id
                  ? "●"
                  : "›"}

              </div>

            </button>

          ))}

        </div>

      )}

    </div>

  );

}

function formatDate(
  value: string
): string {

  const date =
    new Date(value);

  if (Number.isNaN(date.getTime())) {
    return "";
  }

  return new Intl.DateTimeFormat(
    "es-ES",
    {
      day: "2-digit",
      month: "short",
      year: "numeric",
    }
  ).format(date);

}
