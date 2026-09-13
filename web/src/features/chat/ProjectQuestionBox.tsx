import { useState } from "react";
import type { ActivityMember, KPI, TimelineEvent } from "../../types/dashboard";

type Props = {
  kpis: KPI[];
  activity: ActivityMember[];
  events: TimelineEvent[];
};

const suggestions = [
  "¿Quién trabajó más?",
  "¿Última entrega?",
  "¿Última publicación?"
];

export default function ProjectQuestionBox({
  kpis,
  activity,
  events
}: Props) {

  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");

  function ask(q: string) {

    setQuestion(q);

    const text = q.toLowerCase();

    const totalEvents =
      kpis.find(k => k.label === "Eventos")?.value ?? 0;

    const totalPeople =
      kpis.find(k => k.label === "Participantes")?.value ?? 0;

    const leader = activity[0];

    const deliveries =
      events.filter(e => e.type === "delivery");

    const publications =
      events.filter(e => e.type === "publication");

    if (text.includes("trabaj")) {

      if (leader) {

        const percent =
          Math.round((leader.events * 100) / totalEvents);

        setAnswer(
          `${leader.name} lideró la actividad con ${leader.events} eventos (${percent}% del total).`
        );

      }

      return;

    }

    if (text.includes("entrega")) {

      const last = deliveries.at(-1);

      setAnswer(
        last
          ? `${last.author} realizó la última entrega (${last.date}).`
          : "No se detectaron entregas."
      );

      return;

    }

    if (text.includes("public")) {

      const last = publications.at(-1);

      setAnswer(
        last
          ? `${last.author} realizó la última publicación (${last.date}).`
          : "No se detectaron publicaciones."
      );

      return;

    }

    if (text.includes("persona")) {

      setAnswer(
        `Participaron ${totalPeople} personas distintas.`
      );

      return;

    }

    setAnswer("No puedo responder esa consulta todavía.");

  }

  return (

    <div className="rounded-3xl bg-white shadow-xl">

      <div className="border-b border-slate-200 px-6 py-5">

        <div className="text-xs font-bold uppercase tracking-[0.3em] text-blue-600">
          AI Assistant
        </div>

        <h2 className="mt-2 text-2xl font-bold">
          Pregunta al proyecto
        </h2>

      </div>

      <div className="p-6">

        <div className="flex gap-2">

          <input
            value={question}
            onChange={e => setQuestion(e.target.value)}
            placeholder="Escribe una pregunta..."
            className="flex-1 rounded-xl border border-slate-300 px-4 py-3"
          />

          <button
            onClick={() => ask(question)}
            className="rounded-xl bg-blue-600 px-5 text-white">

            →

          </button>

        </div>

        <div className="mt-4 space-y-2">

          {suggestions.map(item => (

            <button
              key={item}
              onClick={() => ask(item)}
              className="block w-full rounded-xl bg-slate-100 px-4 py-2 text-left text-sm transition hover:bg-slate-200">

              {item}

            </button>

          ))}

        </div>

        {answer && (

          <div className="mt-5 rounded-2xl border border-blue-200 bg-blue-50 p-4">

            <div className="mb-2 text-sm font-semibold text-blue-700">

              🤖 InsightFlow AI

            </div>

            <div className="text-sm leading-6 text-slate-700">

              {answer}

            </div>

          </div>

        )}

      </div>

    </div>

  );

}