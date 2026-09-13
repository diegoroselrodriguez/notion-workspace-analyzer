export class RuleEngine {
    rules;
    constructor(rules) {
        this.rules = rules;
    }
    execute(context) {
        for (const rule of this.rules) {
            if (rule.matches(context)) {
                return rule.parse(context);
            }
        }
        return null;
    }
}
//# sourceMappingURL=RuleEngine.js.map