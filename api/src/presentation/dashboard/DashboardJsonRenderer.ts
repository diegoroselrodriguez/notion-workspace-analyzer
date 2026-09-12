import { writeFileSync } from "fs";
import type { DashboardDto } from "./DashboardDto.js";

export class DashboardJsonRenderer {

  static render(dashboard: DashboardDto): void {

    writeFileSync(
      "./output/dashboard.json",
      JSON.stringify(dashboard, null, 2)
    );

    console.log("");
    console.log("✅ Dashboard JSON generado correctamente");
    console.log("./output/dashboard.json");

  }

}