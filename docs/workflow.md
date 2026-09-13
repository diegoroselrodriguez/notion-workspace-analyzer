# Workflow del Departamento de Diseño

## Objetivo

Definir el flujo real de una tarea desde que nace hasta que finaliza.

Este documento representa el funcionamiento del departamento, no el funcionamiento de Notion.

---

# Estados

## 1. Nueva

La tarea ha sido creada.

Todavía nadie trabaja en ella.

Evento de entrada:

- Creación de tarea

---

## 2. Asignada

Existe un responsable.

Eventos:

- ASSIGNMENT

---

## 3. En producción

La persona asignada está trabajando.

No existe todavía una entrega.

---

## 4. Entregada

El trabajo ha sido enviado.

Eventos:

- DELIVERY

---

## 5. Pendiente de publicación

Se solicita publicar.

Eventos:

- PUBLICATION_REQUEST

---

## 6. Publicada

La publicación ya está realizada.

Eventos:

- PUBLICATION_COMPLETED

---

# Flujo ideal

Nueva

↓

Asignada

↓

En producción

↓

Entregada

↓

Pendiente de publicación

↓

Publicada

---

# Casos especiales

## Reasignación

Una tarea puede volver a ASSIGNMENT.

---

## Varias entregas

Puede haber múltiples DELIVERY.

---

## Varias publicaciones

Puede haber varias PUBLICATION_COMPLETED.

---

## Comentarios

Los comentarios no modifican el estado.

Sirven únicamente como contexto.