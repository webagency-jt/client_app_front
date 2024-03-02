/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { UserSettings } from '../models/UserSettings';
import type { UserSettingsInput } from '../models/UserSettingsInput';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class UsersSettingsService {
    /**
     * @param authorization
     * @param requestBody
     * @returns UserSettings todo
     * @throws ApiError
     */
    public static patchUsersSettings(
        authorization?: any,
        requestBody?: UserSettingsInput,
    ): CancelablePromise<UserSettings> {
        return __request(OpenAPI, {
            method: 'PATCH',
            url: '/users/settings',
            headers: {
                'Authorization': authorization,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
}
