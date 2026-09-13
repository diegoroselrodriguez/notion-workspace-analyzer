import { useState } from "react";
import type {
  ActivityMember,
  KPI,
  TimelineEvent,
} from "../../types/dashboard";

type Props = {
  kpis: KPI[];
  activity: ActivityMember[];
  events: TimelineEvent[];
};

export default function ProjectQuestionBox({
  kpis,
  activity,
  events,
}: Props) {

  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");

  function analyze() {

    const q = question.toLowerCase();

    const totalEvents =
      kpis.find(k => k.label === "Eventos")?.value ?? 0;

    const totalPeople =
      kpis.find(k => k.label === "Participantes")?.value ?? 0;

    const publications =
      events.filter(e => e.type === "publication");

    const deliveries =
      events.filter(e => e.type === "delivery");

    const assignments =
      events.filter(e => e.type === "assignment");

    const leader = activity[0];

    if (q.includes("trabaj") || q.includes("particip")) {

      if (leader) {

        const percent = Math.round(
          leader.events * 100 / totalEvents
        );

        setAnswer(
          `${leader.name} fue quien más participó con ${leader.events} eventos (${percent}% del total).`
        );

      }

      return;

    }

    if (q.includes("última entrega")) {

      const last = deliveries.at(-1);

      if (last) {

        setAnswer(
          `${last.author} realizó la última entrega el ${last.date}.`
        );

      } else {

        setAnswer("No se detectaron entregas.");

      }

      return;

    }

    if (q.includes("última publicación")) {

      const last = publications.at(-1);

      if (last) {

        setAnswer(
          `${last.author} realizó la última publicación el ${last.date}.`
        );

      } else {

        setAnswer("No se detectaron publicaciones.");

      }

      return;

    }

    if (q.includes("empez")) {

      const first = events[0];

      setAnswer(
        `${first.author} inició la actividad registrada del proyecto el ${first.date}.`
      );

      return;

    }

    if (q.includes("último")) {

      const last = events.at(-1);

      setAnswer(
        `${last?.author} realizó la última actividad registrada (${last?.date}).`
      );

      return;

    }

    if (q.includes("asign")) {

      setAnswer(
        `InsightFlow detectó ${assignments.length} asignaciones durante el proyecto.`
      );

      return;

    }

    if (q.includes("evento")) {

      setAnswer(
        `Se registraron ${totalEvents} eventos.`
      );

      return;

    }

    if (q.includes("persona") || q.includes("equipo")) {

      setAnswer(
        `Participaron ${totalPeople} personas distintas.`
      );

      return;

    }

    setAnswer(
      "Todavía no conozco esa respuesta."
    );

  }

  return (

    <div className="rounded-3xl bg-white p-8 shadow">

      <h2 className="text-2xl font-bold">
        💬 Pregunta al proyecto
      </h2>

      <p className="mt-2 text-slate-500">
        Haz preguntas sobre la historia del proyecto.
      </p>

      <div className="mt-6 flex gap-3">

        <input
          className="flex-1 rounded-xl border border-slate-300 px-4 py-3"
          value={question}
          onChange={e => setQuestion(e.target.value)}
          placeholder="¿Quién hizo la última entrega?"
        />

        <button
          onClick={analyze}
          className="rounded-xl bg-blue-600 px-6 text-white"
        >
          Preguntar
        </button>

      </div>

      {answer && (

        <div className="mt-6 rounded-2xl border border-blue-200 bg-blue-50 p-5">

          <strong>InsightFlow responde</strong>

          <p className="mt-3 leading-7">

            {answer}

          </p>

        </div>

      )}

    </div>

  );

}