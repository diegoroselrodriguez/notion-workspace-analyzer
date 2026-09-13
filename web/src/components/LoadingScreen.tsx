import { useEffect, useState } from "react";

const steps = [
  "Conectando con Notion...",
  "Leyendo propiedades del proyecto...",
  "Analizando actividad...",
  "Reconstruyendo cronología...",
  "Calculando métricas...",
  "Generando panel ejecutivo..."
];

export default function LoadingScreen() {

  const [step, setStep] = useState(0);

  useEffect(() => {

    const interval = setInterval(() => {

      setStep(prev => {

        if (prev >= steps.length - 1) {

          clearInterval(interval);

          return prev;

        }

        return prev + 1;

      });

    }, 250);

    return () => clearInterval(interval);

  }, []);

  return (

    <div className="flex h-full items-center justify-center bg-slate-100">

      <div className="w-[560px] rounded-3xl bg-white p-10 shadow-2xl">

        <div className="text-center">

          <div className="text-6xl">

            🧠

          </div>

          <h1 className="mt-5 text-4xl font-black text-slate-900">

            InsightFlow

          </h1>

          <p className="mt-2 text-slate-500">

            Analizando automáticamente el proyecto...

          </p>

        </div>

        <div className="mt-10 space-y-4">

          {steps.map((item, index) => (

            <div
              key={item}
              className={`flex items-center gap-3 transition-all ${
                index <= step
                  ? "opacity-100"
                  : "opacity-30"
              }`}>

              <div className="w-6 text-center">

                {index < step ? "✅" : index === step ? "🔄" : "○"}

              </div>

              <div className="text-slate-700">

                {item}

              </div>

            </div>

          ))}

        </div>

        <div className="mt-8 overflow-hidden rounded-full bg-slate-200">

          <div
            className="h-2 rounded-full bg-gradient-to-r from-blue-600 to-cyan-500 transition-all duration-300"
            style={{
              width: `${((step + 1) / steps.length) * 100}%`
            }}
          />

        </div>

      </div>

    </div>

  );

}