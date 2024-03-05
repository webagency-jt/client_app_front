export function getEnv<T>(value: string): T {
    const envValue = process.env[value];

    if (envValue === 'true') {
        return true as T;
    }

    if (envValue === 'false') {
        return false as T;
    }

    return envValue as T;
}