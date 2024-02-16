'use client'
import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

const protectedRoutes = ["/dashboard"];
const authRoutes = ["/login" , "/register"];
export function middleware(request: NextRequest) {
    const currentUser = request.cookies.get('session')?.value

    const requestUrl  = request.nextUrl.pathname;
    const isProtectedRoute = protectedRoutes.some(route => requestUrl.startsWith("/dashboard"));
    if (currentUser && !isProtectedRoute) {
        return NextResponse.redirect(new URL('/dashboard', request.url))
    }
    else if(!currentUser && !authRoutes.includes(request.nextUrl.pathname))
        return NextResponse.redirect(new URL('/login', request.url))
}

export const config = {
    matcher: ['/((?!api|_next/static|_next/image|.*\\.svg$).*)'],
}