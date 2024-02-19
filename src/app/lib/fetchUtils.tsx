
class FetchUtils {
    private static baseUrl: string = 'http://localhost:3000'; // URL de base

    static async get(endpoint: string, headers: Record<string, string> = {}) {
        const url = `${this.baseUrl}${endpoint}`;
        return fetch(url, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                ...headers,
            },
        });
    }

    static async post(endpoint: string, body: any, headers: Record<string, string> = {}) {
        const url = `${this.baseUrl}${endpoint}`;
        return fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                ...headers,
            },
            body: JSON.stringify(body),
        });
    }

    static async put(endpoint: string, body: any, headers: Record<string, string> = {}) {
        const url = `${this.baseUrl}${endpoint}`;
        return fetch(url, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                ...headers,
            },
            body: JSON.stringify(body),
        });
    }

    static async patch(endpoint: string, body: any, headers: Record<string, string> = {}) {
        const url = `${this.baseUrl}${endpoint}`;
        return fetch(url, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json',
                ...headers,
            },
            body: JSON.stringify(body),
        });
    }

}

export default FetchUtils;
