import { onHTTPRequestUtil, expect } from "index";

class DeleteBooking {
    public async deleteBookingById(id: string, token: string) {
        const headers = {
            Cookie: `token=${token}`,
            accept: "application/json"
        }
        const path = String(process.env.DELETE_BOOKING_PATH).replace(/{{:id}}/g, id)
        return await onHTTPRequestUtil.callDeleteAPI(String(process.env.BOOKING_URL), path,{},{},headers)
    }

    public async verifyDeleteBookingSuccess(actualResult: Record<string, any>) {
        expect(actualResult.statusCode, "statusCode should be 200").toEqual(201)
        expect(actualResult.statusText, "statusText should be OK").toEqual("Created")
    }
}

export const onDeleteBooking: DeleteBooking = new DeleteBooking()