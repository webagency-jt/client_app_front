'use server'

import {StatusCodes} from "http-status-codes";
import {cookies} from 'next/headers'
import {cookieUtils} from "@/app/lib/utils";
import fetchUtils from "@/app/lib/fetchUtils";
import {ApiError, DefaultService, UserInformations, UserLoginInput} from "../../../generated";

export async function authenticate(user: UserLoginInput) {
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


            return {statusCode: StatusCodes.OK,data: 'Success'};
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
            response = await getUserInformation(user.id , user.token);

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


export async function signIn(user: UserLoginInput) {
    try {
        const response = await DefaultService.postAuthLogin(user);
        return { statusCode: 200, data : response};
    } catch (error) {
        let statusCode: number = 500;
        let statusText: string = "";
        if (error instanceof ApiError) {
            statusCode = error.status;
            statusText = error.statusText;
        }
        console.error('Error signing in:', error);
        return { statusCode, data : statusText};
    }
}

export async function getUserInformation(userId: string, token: string) {

    try {
        const response = await DefaultService.getUsersInformations(userId,
            token);
        const responseData:IResponseData = { statusCode: 200, data : response}
        return responseData;
    } catch (error) {
        let statusCode: number = 500;
        let statusText: string = "";
        if (error instanceof ApiError) {
            statusCode = error.status;
            statusText = error.statusText;
        }
        const responseData:IResponseData = { statusCode, data : statusText};
        console.error('Error signing in:', error);
        return responseData;
    }
}

export interface IResponseData{
   statusCode: number,
   data:UserInformations | string
}
export interface IUser {
    id: string,
    email: string,
    token: string
    username: string
    role:string
}