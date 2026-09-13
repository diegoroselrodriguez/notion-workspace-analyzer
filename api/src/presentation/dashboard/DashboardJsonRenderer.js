import { writeFileSync } from "fs";
export class DashboardJsonRenderer {
    static render(dashboard) {
        writeFileSync("./output/dashboard.json", JSON.stringify(dashboard, null, 2));
        console.log("");
        console.log("✅ Dashboard JSON generado correctamente");
        console.log("./output/dashboard.json");
    }
}
//# sourceMappingURL=DashboardJsonRenderer.js.map