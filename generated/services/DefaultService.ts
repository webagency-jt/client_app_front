/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { User } from '../models/User';
import type { UserInformations } from '../models/UserInformations';
import type { UserSettings } from '../models/UserSettings';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class DefaultService {
    /**
     * @returns void
     * @throws ApiError
     */
    public static get(): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/',
        });
    }
    /**
     * @param requestBody
     * @returns void
     * @throws ApiError
     */
    public static postAuthLogin(
        requestBody?: {
            email: string;
            password: string;
        },
    ): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/auth/login',
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * @param requestBody
     * @returns User
     * @throws ApiError
     */
    public static postAuthRegister(
        requestBody?: {
            username: string;
            password: string;
            email: string;
        },
    ): CancelablePromise<User> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/auth/register',
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * @returns any Respond a message
     * @throws ApiError
     */
    public static getNotifications(): CancelablePromise<{
        message: string;
    }> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/notifications',
        });
    }
    /**
     * @param requestBody
     * @returns UserSettings
     * @throws ApiError
     */
    public static patchUsersSettings(
        requestBody?: {
            userId: string;
            lang: string;
        },
    ): CancelablePromise<UserSettings> {
        return __request(OpenAPI, {
            method: 'PATCH',
            url: '/users/settings',
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * @param requestBody
     * @returns void
     * @throws ApiError
     */
    public static postUsersExist(
        requestBody?: {
            email: string;
        },
    ): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/users/exist',
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * @param requestBody
     * @returns UserInformations
     * @throws ApiError
     */
    public static putUsersInformations(
        requestBody?: {
            userId: string;
            address?: string;
            city?: string;
            firstname?: string;
            lastname?: string;
            phoneNumber?: string;
            siret?: string;
            state?: string;
            tva?: string;
            zip?: string;
        },
    ): CancelablePromise<UserInformations> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/users/informations',
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * @param requestBody
     * @returns UserInformations
     * @throws ApiError
     */
    public static postUsersInformations(
        requestBody?: {
            userId: string;
            address: string;
            city: string;
            firstname: string;
            lastname: string;
            phoneNumber: string;
            siret: string;
            state: string;
            tva: number;
            zip: string;
        },
    ): CancelablePromise<UserInformations> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/users/informations',
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * @param userId
     * @returns UserInformations
     * @throws ApiError
     */
    public static getUsersInformations(
        userId: string,
    ): CancelablePromise<UserInformations> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/users/informations/{userId}',
            path: {
                'userId': userId,
            },
        });
    }
}
