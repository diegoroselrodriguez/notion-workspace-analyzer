import { Router } from "express";
import { GetWorkspaceUseCase } from "../application/workspace/GetWorkspaceUseCase.js";

const router = Router();

router.get("/workspace", async (_req, res) => {

  console.log("🚀 /api/workspace");

  try {

    const workspace =
      await new GetWorkspaceUseCase().execute();

    console.log("✅ Workspace enviado");

    res.json(workspace);

  } catch (error) {

    console.error(error);

    res.status(500).json({

      message:
        error instanceof Error
          ? error.message
          : "Error interno"

    });

  }

});

export default router;