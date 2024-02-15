import { cookies } from 'next/headers'
export function cookieUtils<T>(cookieName: string):T | undefined{
    const cookie = cookies().get(cookieName)?.value;
    return cookie as T;
}