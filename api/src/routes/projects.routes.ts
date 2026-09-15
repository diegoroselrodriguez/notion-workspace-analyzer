import { Router } from "express";
import { GetProjectsUseCase } from "../application/projects/GetProjectsUseCase.js";

const router =
  Router();

router.get("/projects", async (_req, res) => {

  try {

    const projects =
      await new GetProjectsUseCase().execute();

    res.json(projects);

  } catch (error) {

    console.error(error);

    res.status(500).json({
      message:
        error instanceof Error
          ? error.message
          : "Error interno",
    });

  }

});

export default router;