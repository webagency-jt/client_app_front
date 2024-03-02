/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { UserInformations } from '../models/UserInformations';
import type { UserInformationsCreateInput } from '../models/UserInformationsCreateInput';
import type { UserInformationsUpdateInput } from '../models/UserInformationsUpdateInput';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class UsersInformationsService {
    /**
     * @param authorization
     * @param requestBody
     * @returns UserInformations todo
     * @throws ApiError
     */
    public static putUsersInformations(
        authorization?: any,
        requestBody?: UserInformationsUpdateInput,
    ): CancelablePromise<UserInformations> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/users/informations',
            headers: {
                'Authorization': authorization,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * @param authorization
     * @param requestBody
     * @returns UserInformations to do
     * @throws ApiError
     */
    public static postUsersInformations(
        authorization?: any,
        requestBody?: UserInformationsCreateInput,
    ): CancelablePromise<UserInformations> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/users/informations',
            headers: {
                'Authorization': authorization,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * @param userId
     * @param authorization
     * @returns UserInformations todo
     * @throws ApiError
     */
    public static getUsersInformations(
        userId: string,
        authorization?: any,
    ): CancelablePromise<UserInformations> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/users/informations/{userId}',
            path: {
                'userId': userId,
            },
            headers: {
                'Authorization': authorization,
            },
        });
    }
}
