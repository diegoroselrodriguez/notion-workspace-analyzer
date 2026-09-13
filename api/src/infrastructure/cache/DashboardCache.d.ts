export declare class DashboardCache<T> {
    private readonly ttlMs;
    constructor(ttlMs?: number);
    private readonly cache;
    has(key: string): boolean;
    get(key: string): T | undefined;
    set(key: string, value: T): void;
    clear(): void;
}
//# sourceMappingURL=DashboardCache.d.ts.map