type CacheEntry<T> = {
  value: T;
  createdAt: number;
};

export class DashboardCache<T> {

  constructor(
    private readonly ttlMs = 5 * 60 * 1000
  ) {}

  private readonly cache =
    new Map<string, CacheEntry<T>>();

  has(key: string): boolean {

    const entry = this.cache.get(key);

    if (!entry) {
      return false;
    }

    const expired =
      Date.now() - entry.createdAt > this.ttlMs;

    if (expired) {
      this.cache.delete(key);
      return false;
    }

    return true;

  }

  get(key: string): T | undefined {

    return this.cache.get(key)?.value;

  }

  set(key: string, value: T): void {

    this.cache.set(key, {
      value,
      createdAt: Date.now()
    });

  }

  clear(): void {

    this.cache.clear();

  }

}