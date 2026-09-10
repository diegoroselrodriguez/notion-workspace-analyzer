import { PublicationCompletedRule } from "./src/application/parsers/rules/publication-completed.rule.js";

import type { CommentContext } from "./src/domain/comments/CommentContext.js";

const rule = new PublicationCompletedRule();

const context: CommentContext = {
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