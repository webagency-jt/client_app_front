'use server'

//import { signIn } from '@/auth'

import {StatusCodes} from "http-status-codes";

export async function authenticate(user:IUser) {
    try {
        await signIn(user)
    } catch (error) {
        if (error) {
            switch (error) {
                case StatusCodes.BAD_REQUEST:
                    return 'Invalid credentials.'
                default:
                    return 'Something went wrong.'
            }
        }
        throw error
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
    console.log(res.json());
    return res.json()
}

export interface IUser {
    email: string,
    password: string
}