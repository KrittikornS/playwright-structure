import { onHTTPRequestUtil, expect} from "index";

class PatchBooking {
    public async updateBooking(id: string , token: string, reqBody: Record<string,any>) {
        const headers = {
            Cookie: `token=${token}`,
            accept: "application/json"
        }
        const path = String(process.env.PATCH_BOOKING_PATH).replace(/{{:id}}/g, id)
        return await onHTTPRequestUtil.callPatchAPI(String(process.env.BOOKING_URL),path,{},reqBody,headers)
    }

    public async verifyUpdateBookingSuccess(actualResult: Record<string,any>, defaultData: Record<string,any> , reqBody: Record<string,any>) {
        expect(actualResult.statusCode, "statusCode should be 200").toEqual(200)
        expect(actualResult.statusText, "statusText should be OK").toEqual("OK")
        const expectData = Object.assign(defaultData, reqBody)
        expect(actualResult.body.firstname, `firstname should be OK ${expectData.firstname}`).toEqual(expectData.firstname)
        expect(actualResult.body.lastname, `lastname should be OK ${expectData.lastname}`).toEqual(expectData.lastname)
        expect(actualResult.body.depositpaid, `depositpaid should be OK ${expectData.depositpaid}`).toEqual(expectData.depositpaid)
        expect(actualResult.body.bookingdates, `bookingdates should be OK ${expectData.bookingdates}`).toEqual(expectData.bookingdates)
        expect(actualResult.body.additionalneeds, `additionalneeds should be OK ${expectData.additionalneeds}`).toEqual(expectData.additionalneeds)
    }
}

export const onPatchBooking : PatchBooking = new PatchBooking()