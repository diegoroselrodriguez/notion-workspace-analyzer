import { Router } from "express";
import { GetDashboardUseCase } from "../application/dashboard/GetDashboardUseCase.js";
import { NotionGateway } from "../infrastructure/notion/notion.gateway.js";
const router = Router();
router.get("/workspace", async (_req, res) => {
    try {
        const gateway = new NotionGateway();
        const result = await gateway.queryDataSource("4f68b74a-6e4f-495e-8f33-864a3feb3796");
        const totalProjects = result.results.length;
        const useCase = new GetDashboardUseCase();
        const dashboards = await Promise.all(Array.from({ length: totalProjects }, (_, index) => useCase.execute(index)));
        const people = new Map();
        dashboards.forEach((project) => {
            project.activity.forEach((person) => {
                people.set(person.name, (people.get(person.name) ?? 0) + person.events);
            });
        });
        const topPeople = [...people.entries()]
            .sort((a, b) => b[1] - a[1])
            .slice(0, 10)
            .map(([name]) => name);
        const topProjects = dashboards
            .slice()
            .sort((a, b) => b.kpis[0].value - a.kpis[0].value)
            .map((project) => project.title);
        res.json({
            projects: dashboards.length,
            completed: dashboards.length,
            active: 0,
            people: people.size,
            topProjects,
            topPeople,
        });
    }
    catch (error) {
        console.error(error);
        res.status(500).json({
            message: error instanceof Error
                ? error.message
                : "Error interno",
        });
    }
});
export default router;
//# sourceMappingURL=workspace.routes.js.map