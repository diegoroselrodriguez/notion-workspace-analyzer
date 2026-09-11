import { writeFileSync } from "fs";

import { Timeline } from "../../domain/timeline/Timeline.js";
import { ProjectPresenter } from "../presenters/ProjectPresenter.js";
import { EventPresenter } from "../presenters/EventPresenter.js";

export class TimelineHtmlRenderer {

  static render(timeline: Timeline) {

    const project = ProjectPresenter.present(timeline);

    const participants = [
      ...new Set(
        timeline.events.map(event => event.author)
      ),
    ];

    const html = `
<!DOCTYPE html>
<html lang="es">

<head>

<meta charset="UTF-8">

<title>${project.title}</title>

<style>

*{
box-sizing:border-box;
margin:0;
padding:0;
}

body{

background:#eef2f7;
font-family:Inter,Arial,sans-serif;
color:#1e293b;
padding:40px;

}

.container{

max-width:1300px;
margin:auto;

}

.header{

background:linear-gradient(135deg,#0f172a,#2563eb);
color:white;
padding:45px;
border-radius:20px;
margin-bottom:35px;

box-shadow:0 20px 50px rgba(0,0,0,.25);

}

.header h1{

font-size:46px;
margin-bottom:8px;

}

.header p{

opacity:.9;

}

.header h2{

margin-top:25px;
font-size:34px;

}

.cards{

display:grid;
grid-template-columns:repeat(auto-fit,minmax(180px,1fr));
gap:20px;

margin-bottom:30px;

}

.card{

background:white;
border-radius:18px;
padding:30px;

box-shadow:0 12px 30px rgba(0,0,0,.08);

transition:.2s;

}

.card:hover{

transform:translateY(-4px);

}

.card h2{

font-size:42px;
color:#2563eb;

}

.card p{

margin-top:10px;
font-weight:600;
color:#64748b;

}

.section{

background:white;

border-radius:18px;

padding:30px;

margin-bottom:25px;

box-shadow:0 12px 30px rgba(0,0,0,.08);

}

.section h2{

margin-bottom:20px;

}

.summary{

font-size:18px;
line-height:1.8;

}

.people{

display:flex;
gap:12px;
flex-wrap:wrap;

}

.person{

background:#2563eb;
color:white;

padding:10px 18px;

border-radius:30px;

font-weight:bold;

}

.timeline{

margin-top:10px;

}

.event{

position:relative;

padding:20px 20px 20px 35px;

margin-left:15px;

border-left:4px solid #cbd5e1;

margin-bottom:20px;

}

.event::before{

content:"";

position:absolute;

left:-11px;

top:28px;

width:18px;

height:18px;

border-radius:50%;

background:#2563eb;

border:4px solid white;

box-shadow:0 0 0 2px #2563eb;

}

.event.assignment::before{

background:#2563eb;

box-shadow:0 0 0 2px #2563eb;

}

.event.delivery::before{

background:#f97316;

box-shadow:0 0 0 2px #f97316;

}

.event.publication::before{

background:#16a34a;

box-shadow:0 0 0 2px #16a34a;

}

.event.comment::before{

background:#64748b;

box-shadow:0 0 0 2px #64748b;

}

.event-title{

font-size:20px;

font-weight:bold;

margin-bottom:5px;

}

.event-author{

font-weight:bold;

margin-bottom:4px;

}

.event-date{

color:#64748b;

font-size:14px;

margin-bottom:12px;

}

.event-description{

white-space:pre-wrap;

line-height:1.6;

}

.footer{

text-align:center;

margin-top:40px;

color:#64748b;

font-size:14px;

}

</style>

</head>

<body>

<div class="container">

<div class="header">

<h1>🚀 InsightFlow</h1>

<p>Motor inteligente para proyectos de Marketing</p>

<h2>${project.title}</h2>

</div>

<div class="cards">

<div class="card">
<h2>${project.events}</h2>
<p>Eventos</p>
</div>

<div class="card">
<h2>${project.participants}</h2>
<p>Participantes</p>
</div>

<div class="card">
<h2>${project.assignments}</h2>
<p>Asignaciones</p>
</div>

<div class="card">
<h2>${project.deliveries}</h2>
<p>Entregas</p>
</div>

<div class="card">
<h2>${project.publications}</h2>
<p>Publicaciones</p>
</div>

<div class="card">
<h2>${project.duration}</h2>
<p>Días</p>
</div>

</div>

<div class="section">

<h2>🧠 Resumen generado automáticamente</h2>

<div class="summary">

<p><b>Estado:</b> 🟢 ${project.status}</p>

<p><b>Duración:</b> ${project.duration} días</p>

<p><b>Mayor actividad:</b> ${project.mostActiveUser}</p>

<br>

<p>${project.summary}</p>

</div>

</div>

<div class="section">

<h2>👥 Participantes</h2>

<div class="people">

${participants.map(person=>`
<div class="person">${person}</div>
`).join("")}

</div>

</div>

<div class="section">

<h2>📈 Actividad del equipo</h2>

${project.activity.map(user=>`

<div style="margin-bottom:18px;">

<div style="
display:flex;
justify-content:space-between;
margin-bottom:6px;
font-weight:bold;
">

<span>${user.name}</span>

<span>${user.events} eventos</span>

</div>

<div style="
height:14px;
background:#e2e8f0;
border-radius:20px;
overflow:hidden;
">

<div style="
height:100%;
width:${Math.min(user.events*10,100)}%;
background:linear-gradient(90deg,#2563eb,#38bdf8);
border-radius:20px;
">
</div>

</div>

</div>

`).join("")}

</div>

<div class="section">

<h2>🕒 Timeline del proyecto</h2>

<div class="timeline">

${timeline.events.map(event=>{

const view=EventPresenter.present(event);

const css=view.title.toLowerCase();

return `

<div class="event ${css}">

<div class="event-title">

${view.icon} ${view.title}

</div>

<div class="event-author">

${view.author}

</div>

<div class="event-date">

${new Date(view.date).toLocaleString("es-ES")}

</div>

<div class="event-description">

${view.description}

</div>

</div>

`;

}).join("")}

</div>

</div>

<div class="footer">

InsightFlow · MVP · Construido sobre Notion · Timeline generado automáticamente

</div>

</div>

</body>

</html>
`;

    writeFileSync("./output/timeline.html", html);

    console.log("");
    console.log("✅ HTML generado correctamente");
    console.log("./output/timeline.html");

  }

}