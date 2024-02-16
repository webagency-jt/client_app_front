'use server'

import {StatusCodes} from "http-status-codes";
import {cookies} from 'next/headers'
import {cookieUtils} from "@/app/lib/utils";

export async function authenticate(user: IUserAuth) {
    try {
        // Appel à la fonction signIn pour obtenir les données de la réponse
        const response = await signIn(user);
        // Vérification du contenu de la réponse
        if (response.statusCode === StatusCodes.OK) {
            const oneDay = 24 * 60 * 60 * 1000
            cookies().set({
                name: 'session',
                value: JSON.stringify(response.data),
                httpOnly: true,
                path: '/',
            })


            return response;
        } else {
            switch (response.statusCode) {
                case StatusCodes.NOT_FOUND:
                    return {statusCode: StatusCodes.NOT_FOUND, data: 'Invalid credentials'};
                default:
                    return {statusCode: StatusCodes.NOT_FOUND, data: 'Invalid credentials'}
            }
        }
    } catch (error) {
        // Si une erreur est survenue lors de l'appel à signIn, renvoyer un message d'erreur générique
        return {statusCode: StatusCodes.NOT_FOUND, data: 'An error occurred.'};
    }
}

export async function Setting() {
    try {
        // Appel à la fonction signIn pour obtenir les données de la réponse
        const user = cookieUtils<IUser>('session')
        let response;
        if (user)
            response = await getUserInformation(user.id);

        if (response) {
            // Vérification du contenu de la réponse
            if (response.statusCode === StatusCodes.OK) {
                return response;
            } else {
                switch (response.statusCode) {
                    case StatusCodes.NOT_FOUND:
                        return {statusCode: StatusCodes.NOT_FOUND, data: 'Invalid userId'};
                    default:
                        return {statusCode: StatusCodes.NOT_FOUND, data: 'Invalid userId'}
                }
            }
        }
    } catch (error) {
        // Si une erreur est survenue lors de l'appel à getUserInformation, renvoyer un message d'erreur générique
        return {statusCode: StatusCodes.NOT_FOUND, data: 'An error occurred'};
    }
}


export async function signIn(user: IUserAuth) {
    const res = await fetch('http://localhost:3000/auth/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(user),
    });
    return {statusCode: res.status, data: await res.json()};
}

export async function getUserInformation(userId: string) {

    const res = await fetch('http://localhost:3000/users/informations/' + userId, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        },
    });
    return {statusCode: res.status, data: await res.json()};
}

export interface IUser {
    id: string,
    email: string,
    token: string
    username: string
}

export interface IUserAuth {
    username?: string,
    email: string,
    password: string
}