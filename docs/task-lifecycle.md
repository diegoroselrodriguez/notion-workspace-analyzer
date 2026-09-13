# Task Lifecycle

## Objetivo

Este documento describe el ciclo de vida de una tarea dentro del equipo de Diseño.

No representa el estado almacenado en Notion.

Representa el estado real deducido a partir de los eventos.

---

## Flujo principal

Nueva solicitud

↓

Asignada

↓

En desarrollo

↓

Entregada

↓

En revisión

↓

Correcciones (opcional)

↓

Pendiente de publicación

↓

Publicada

↓

Finalizada

---

## Eventos que producen una transición

| Evento | Estado anterior | Estado nuevo |
|---------|-----------------|--------------|
| ASSIGNMENT | Nueva solicitud | Asignada |
| DELIVERY | En desarrollo | Entregada |
| REVIEW_REQUEST | Entregada | En revisión |
| REVIEW_COMPLETED | En revisión | Pendiente de publicación |
| PUBLICATION_REQUEST | Pendiente de publicación | Pendiente de publicación |
| PUBLICATION_COMPLETED | Pendiente de publicación | Publicada |

---

## Posibles excepciones

- Una tarea puede volver de revisión a desarrollo.
- Una publicación puede requerir una corrección posterior.
- Una tarea puede cambiar de responsable en cualquier momento.