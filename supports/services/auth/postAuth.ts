import { onHTTPRequestUtil, expect} from "index";

class PostAuth {
    public async createToken(reqBody: Record<string,any>) {
        return await onHTTPRequestUtil.callPostAPI(String(process.env.BOOKING_URL),String(process.env.POST_AUTH_PATH),{},reqBody)
    }
}

export const onPostAuth : PostAuth = new PostAuth()