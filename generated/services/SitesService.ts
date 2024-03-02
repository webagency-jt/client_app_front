/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { SitesInput } from '../models/SitesInput';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class SitesService {
    /**
     * @param authorization
     * @param requestBody
     * @returns void
     * @throws ApiError
     */
    public static postSites(
        authorization?: any,
        requestBody?: SitesInput,
    ): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/sites',
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
    public static getSites(
        authorization?: any,
    ): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/sites',
            headers: {
                'Authorization': authorization,
            },
        });
    }
    /**
     * @param authorization
     * @param requestBody
     * @returns void
     * @throws ApiError
     */
    public static putSites(
        authorization?: any,
        requestBody?: SitesInput,
    ): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/sites',
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
    public static deleteSites(
        authorization?: any,
    ): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/sites/{sitesId}',
            headers: {
                'Authorization': authorization,
            },
        });
    }
    /**
     * @param authorization
     * @returns void
     * @throws ApiError
     */
    public static getSites1(
        authorization?: any,
    ): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/sites/{sitesId}',
            headers: {
                'Authorization': authorization,
            },
        });
    }
}
