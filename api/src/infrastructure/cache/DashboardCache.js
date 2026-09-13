export class DashboardCache {
    ttlMs;
    constructor(ttlMs = 5 * 60 * 1000) {
        this.ttlMs = ttlMs;
    }
    cache = new Map();
    has(key) {
        const entry = this.cache.get(key);
        if (!entry) {
            return false;
        }
        const expired = Date.now() - entry.createdAt > this.ttlMs;
        if (expired) {
            this.cache.delete(key);
            return false;
        }
        return true;
    }
    get(key) {
        return this.cache.get(key)?.value;
    }
    set(key, value) {
        this.cache.set(key, {
            value,
            createdAt: Date.now()
        });
    }
    clear() {
        this.cache.clear();
    }
}
//# sourceMappingURL=DashboardCache.js.map