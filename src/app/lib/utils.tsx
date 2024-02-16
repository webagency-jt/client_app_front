import { cookies } from 'next/headers'
export function cookieUtils<T>(cookieName: string): T{
    const cookie = cookies().get(cookieName)?.value;
    let parsedCookie;
    if(cookie) {
        parsedCookie = JSON.parse(cookie);
        return parsedCookie as T;
    }

    throw new Error(`cookie ${cookieName} not found`);
}