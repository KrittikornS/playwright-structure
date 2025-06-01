import { request } from "index";

class ContextHTTPRequest {
    public async createContextHTTPRequest(endpoint: string) {
        return await request.newContext({
            baseURL: endpoint,
            timeout: 30000,
            failOnStatusCode: false,
            ignoreHTTPSErrors: true
        })
    }
}

export const onContextHTTPRequest: ContextHTTPRequest = new ContextHTTPRequest();