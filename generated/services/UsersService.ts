/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { UserUsername } from '../models/UserUsername';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class UsersService {
    /**
     * @param authorization
     * @param requestBody
     * @returns void
     * @throws ApiError
     */
    public static postUsersExist(
        authorization?: any,
        requestBody?: UserUsername,
    ): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/users/exist',
            headers: {
                'Authorization': authorization,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * @param authorization
     * @returns void
     * @throws ApiError
     */
    public static getUsersMe(
        authorization?: any,
    ): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/users/me',
            headers: {
                'Authorization': authorization,
            },
        });
    }
}
