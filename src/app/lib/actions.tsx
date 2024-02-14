'use server'

//import { signIn } from '@/auth'

import {StatusCodes} from "http-status-codes";

export async function authenticate(user: IUser) {
    try {
        // Appel à la fonction signIn pour obtenir les données de la réponse
        const response = await signIn(user);
        // Vérification du contenu de la réponse
        if (response.statusCode === StatusCodes.OK ) {
            return response;
        } else {
            switch (response.statusCode) {
                case StatusCodes.NOT_FOUND:
                    return {statusCode : StatusCodes.NOT_FOUND , data:'Invalid credentials'};
            }
        }
    } catch (error) {
        // Si une erreur est survenue lors de l'appel à signIn, renvoyer un message d'erreur générique
        return {statusCode : StatusCodes.NOT_FOUND , data: 'An error occurred.'};
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
    return { statusCode: res.status, data: await res.json() };
}

export interface IUser {
    email: string,
    password: string
}

export interface IUserRegister {
    username:string,
    email: string,
    password: string
}