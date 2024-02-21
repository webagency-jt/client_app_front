/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { User } from '../models/User';
import type { UserCreateInput } from '../models/UserCreateInput';
import type { UserInformations } from '../models/UserInformations';
import type { UserInformationsCreateInput } from '../models/UserInformationsCreateInput';
import type { UserInformationsUpdateInput } from '../models/UserInformationsUpdateInput';
import type { UserLoginInput } from '../models/UserLoginInput';
import type { UserSettings } from '../models/UserSettings';
import type { UserSettingsInput } from '../models/UserSettingsInput';
import type { UserUsername } from '../models/UserUsername';
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
        requestBody?: UserLoginInput,
    ): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'POST',
            url: 'http://localhost:3000/auth/login',
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
        requestBody?: UserCreateInput,
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
        requestBody?: UserSettingsInput,
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
        requestBody?: UserUsername,
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
        requestBody?: UserInformationsUpdateInput,
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
        requestBody?: UserInformationsCreateInput,
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
     * @param headers
     * @returns UserInformations
     * @throws ApiError
     */
    public static getUsersInformations(
        userId: string,
        headers?: Record<string, string>
    ): CancelablePromise<UserInformations> {
        return __request(OpenAPI, {
            method: 'GET',
            url: 'http://localhost:3000/users/informations/{userId}',
            path: {
                'userId': userId,
            },
            headers: headers,
        });
    }
}
