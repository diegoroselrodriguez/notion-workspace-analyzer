import cors from "cors";
import express from "express";

import dashboardRoutes from "./routes/dashboard.routes.js";
import workspaceRoutes from "./routes/workspace.routes.js";
import projectsRoutes from "./routes/projects.routes.js";

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (_req, res) => {

  res.json({
    name: "InsightFlow API",
    version: "0.1.0",
    status: "running",
  });

});

app.get("/health", (_req, res) => {

  res.json({
    status: "ok",
    service: "InsightFlow API",
  });

});

app.use("/api", dashboardRoutes);
app.use("/api", workspaceRoutes);
app.use("/api", projectsRoutes);

const PORT = 3000;

app.listen(PORT, () => {

  console.log("");
  console.log("══════════════════════════════════════");
  console.log("🚀 InsightFlow API");
  console.log("══════════════════════════════════════");
  console.log(`Listening on http://localhost:${PORT}`);
  console.log("");

});