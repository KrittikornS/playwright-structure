import { onContextHTTPRequest } from "index";

class HTTPRequestUtil {
    public async callPostAPI(endpoint: string, path: string, params?: Record<string, any>, reqData?: Record<string, any>, headers?: Record<string, any>) {
        let option: Record<string, any> = {
            headers: headers ?? { accept: "application/json" },
            params: params ?? {},
            data: reqData ?? {}
        }
        const contextHTTP: any = await onContextHTTPRequest.createContextHTTPRequest(endpoint);
        const result = await contextHTTP.post(path, option);
        contextHTTP.dispose();
        const resp = {
            statusCode: result.status(),
            statusText: result.statusText(),
            body: await result.json(),
        };
        return resp
    }

    public async callGetAPI(endpoint: string, path: string, params?: Record<string, any>, reqData?: Record<string, any>, headers?: Record<string, any>) {
        let option: Record<string, any> = {
            headers: headers ?? { accept: "application/json" },
            params: params ?? {},
            data: reqData ?? {}
        }
        const contextHTTP: any = await onContextHTTPRequest.createContextHTTPRequest(endpoint);
        const result = await contextHTTP.get(path, option);
        contextHTTP.dispose();
        const resp = {
            statusCode: result.status(),
            statusText: result.statusText(),
            body: await result.json(),
        };
        return resp
    }

    public async callPatchAPI(endpoint: string, path: string, params?: Record<string, any>, reqData?: Record<string, any>, headers?: Record<string, any>) {
        let option: Record<string, any> = {
            headers: headers ?? { accept: "application/json" },
            params: params ?? {},
            data: reqData ?? {}
        }
        const contextHTTP: any = await onContextHTTPRequest.createContextHTTPRequest(endpoint);
        const result = await contextHTTP.patch(path, option);
        contextHTTP.dispose();
        const resp = {
            statusCode: result.status(),
            statusText: result.statusText(),
            body: await result.json(),
        };
        return resp
    }

    public async callDeleteAPI(endpoint: string, path: string, params?: Record<string, any>, reqData?: Record<string, any>, headers?: Record<string, any>) {
        let option: Record<string, any> = {
            headers: headers ?? { accept: "application/json" },
            params: params ?? {},
            data: reqData ?? {}
        }
        const contextHTTP: any = await onContextHTTPRequest.createContextHTTPRequest(endpoint);
        const result = await contextHTTP.delete(path, option);
        contextHTTP.dispose();
        const resp = {
            statusCode: result.status(),
            statusText: result.statusText(),
        };
        return resp
    }
}
export const onHTTPRequestUtil: HTTPRequestUtil = new HTTPRequestUtil();