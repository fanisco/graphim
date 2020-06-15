export const ch = <T, U>(v: any, a: T, b: U): T | U => {
    return v !== undefined && v !== null ? a : b;
}
