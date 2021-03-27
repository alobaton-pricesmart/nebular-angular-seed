export class StringUtil {
    public static isNullOrEmpty(s: string): boolean {
        return s === null || s === undefined || s.length === 0;
    }

    public static empty(s: string): string {
        return this.isNullOrEmpty(s) ? '' : s;
    }
}
