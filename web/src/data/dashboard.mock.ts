import type { DashboardData } from "../types/dashboard";

export const dashboards: Record<string, DashboardData> = {

  resultados: {

    title: "Resultados H1 2026",

    status: "Finalizado",

    summary:
      "InsightFlow reconstruyó automáticamente la historia del proyecto leyendo los comentarios de Notion. Participaron siete personas, se detectaron veintisiete eventos, dos asignaciones, tres entregas y dos publicaciones.",

    insights: [
      "Se detectaron 27 eventos durante el proyecto.",
      "Participaron 7 personas.",
      "Hubo 2 asignaciones de trabajo.",
      "Se realizaron 3 entregas relevantes.",
      "Se registraron 2 publicaciones.",
      "No se detectan bloqueos importantes."
    ],

    kpis: [

      { label: "Eventos", value: 27 },

      { label: "Participantes", value: 7 },

      { label: "Asignaciones", value: 2 },

      { label: "Entregas", value: 3 },

      { label: "Publicaciones", value: 2 },

      { label: "Días", value: 4 },

    ],

    activity: [

      { name: "Diego Rosel", events: 8 },

      { name: "José", events: 7 },

      { name: "Carlos Pérez García", events: 5 },

      { name: "Alejandro Bernaola", events: 3 },

      { name: "Gema Tejedor", events: 2 },

      { name: "Roberto López", events: 1 },

      { name: "Vanessa Torres", events: 1 },

    ],

    timeline: [

      {
        type: "comment",
        author: "José",
        date: "11 Ago · 14:12",
        description: "Se inicia el proyecto."
      },

      {
        type: "assignment",
        author: "Carlos Pérez García",
        date: "13 Ago · 09:31",
        description: "Asigna el trabajo a Gema."
      },

      {
        type: "assignment",
        author: "Carlos Pérez García",
        date: "13 Ago · 09:32",
        description: "Asigna Banner DC a Diego."
      },

      {
        type: "delivery",
        author: "Diego Rosel",
        date: "14 Ago · 06:31",
        description: "Entrega la maquetación."
      },

      {
        type: "publication",
        author: "Diego Rosel",
        date: "14 Ago · 09:17",
        description: "Publicación en DIGI Hub."
      }

    ]

  },

  diginews: {

    title: "DIGI News",

    status: "En progreso",

    summary:
      "InsightFlow detectó que el proyecto continúa activo. Se han realizado varias entregas pero aún no existe una publicación final.",

    insights: [
      "El proyecto continúa activo.",
      "Participaron 4 personas.",
      "Se detectó 1 asignación.",
      "Se realizaron 2 entregas.",
      "Todavía no se ha registrado una publicación final.",
      "El proyecto requiere seguimiento."
    ],

    kpis: [

      { label: "Eventos", value: 12 },

      { label: "Participantes", value: 4 },

      { label: "Asignaciones", value: 1 },

      { label: "Entregas", value: 2 },

      { label: "Publicaciones", value: 0 },

      { label: "Días", value: 2 },

    ],

    activity: [

      { name: "Gema Tejedor", events: 5 },

      { name: "Vanessa Torres", events: 4 },

      { name: "Carlos Pérez García", events: 2 },

      { name: "Diego Rosel", events: 1 }

    ],

    timeline: [

      {
        type: "comment",
        author: "Vanessa Torres",
        date: "Hoy · 09:20",
        description: "Solicitud de maquetación."
      },

      {
        type: "assignment",
        author: "Carlos Pérez García",
        date: "Hoy · 09:30",
        description: "Asignado a Gema."
      }

    ]

  }

};