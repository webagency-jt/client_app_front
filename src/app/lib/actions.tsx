'use server'

//import { signIn } from '@/auth'

import {StatusCodes} from "http-status-codes";

export async function authenticate(user:IUser) {
    const test = await signIn(user);
    console.log(test)
        if (test) {
            switch (test) {
                case StatusCodes.BAD_REQUEST:
                    return 'Invalid credentials.'
                case StatusCodes.NOT_FOUND:
                    return 'Invalid Credentials'
                default:
                    return 'Something went wrong.'
            }
        }
}

export async function signIn(user: IUser) {
    const res = await fetch('http://localhost:3000/auth/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(user),
    });
    return res.status
}

export interface IUser {
    email: string,
    password: string
}