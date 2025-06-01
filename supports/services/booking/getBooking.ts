import { onHTTPRequestUtil, expect} from "index";

class GetBooking {
    public async getBookingById(id: string) {
        const path = String(process.env.GET_BOOKING_PATH).replace(/{{:id}}/g, id)
        return await onHTTPRequestUtil.callGetAPI(String(process.env.BOOKING_URL),path)
    }

    public async verifyGetBookingSuccess(actualResult: Record<string,any>, expectData: Record<string,any>) {
        expect(actualResult.statusCode, "statusCode should be 200").toEqual(200)
        expect(actualResult.statusText, "statusText should be OK").toEqual("OK")
        expect(actualResult.body.firstname, `firstname should be OK ${expectData.firstname}`).toEqual(expectData.firstname)
        expect(actualResult.body.lastname, `lastname should be OK ${expectData.lastname}`).toEqual(expectData.lastname)
        expect(actualResult.body.depositpaid, `depositpaid should be OK ${expectData.depositpaid}`).toEqual(expectData.depositpaid)
        expect(actualResult.body.bookingdates, `bookingdates should be OK ${expectData.bookingdates}`).toEqual(expectData.bookingdates)
        expect(actualResult.body.additionalneeds, `additionalneeds should be OK ${expectData.additionalneeds}`).toEqual(expectData.additionalneeds)
    }
}

export const onGetBooking : GetBooking = new GetBooking()