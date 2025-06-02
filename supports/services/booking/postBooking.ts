import { onHTTPRequestUtil, expect} from "index";

class PostBooking {
    public async createBooking(reqBody: Record<string,any>) {
        return await onHTTPRequestUtil.callPostAPI(String(process.env.BOOKING_URL),String(process.env.POST_BOOKING_PATH),{},reqBody)
    }

    public async verifyCreateBookingSuccess(actualResult: Record<string,any>, reqBody: Record<string,any>) {
        expect(actualResult.statusCode, "statusCode should be 200").toEqual(200)
        expect(actualResult.statusText, "statusText should be OK").toEqual("OK")
        expect(typeof actualResult.body.bookingid, "bookingid should be number").toEqual("number")
        expect(actualResult.body.booking.firstname, `firstname should be ${reqBody.firstname}`).toEqual(reqBody.firstname)
        expect(actualResult.body.booking.lastname, `lastname should be ${reqBody.lastname}`).toEqual(reqBody.lastname)
        expect(actualResult.body.booking.depositpaid, `depositpaid should be ${reqBody.depositpaid}`).toEqual(reqBody.depositpaid)
        expect(actualResult.body.booking.bookingdates, `bookingdates should be ${reqBody.bookingdates}`).toEqual(reqBody.bookingdates)
        expect(actualResult.body.booking.additionalneeds, `additionalneeds should be ${reqBody.additionalneeds}`).toEqual(reqBody.additionalneeds)
    }
}

export const onPostBooking : PostBooking = new PostBooking()