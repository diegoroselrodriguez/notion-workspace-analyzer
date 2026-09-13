import { Router } from "express";
import { GetDashboardUseCase } from "../application/dashboard/GetDashboardUseCase.js";

const router = Router();

router.get(
  "/projects/:id/dashboard",
  async (req, res) => {

    console.log("➡️ Entró en /api/projects/:id/dashboard");

    try {

      const projectIndex = Number(req.params.id);

      console.log("Project:", projectIndex);

      const dashboard =
        await new GetDashboardUseCase().execute(projectIndex);

      console.log("Enviando respuesta");

      res.json(dashboard);

    } catch (error) {

      console.error(error);

      res.status(500).json({
        message:
          error instanceof Error
            ? error.message
            : "Error interno"
      });

    }

  }
);

export default router;