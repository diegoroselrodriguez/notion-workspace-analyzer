import { PublicationCompletedRule } from "./src/application/parsers/rules/publication-completed.rule.js";
const rule = new PublicationCompletedRule();
const context = {
    id: "1",
    author: "Diego",
    text: "Entrada publicada DIGIHub.",
    createdAt: new Date().toISOString(),
    mentions: [],
    urls: [],
    attachments: [],
};
console.log("matches:", rule.matches(context));
console.log(rule.parse(context));
//# sourceMappingURL=test-publication-rule.js.map