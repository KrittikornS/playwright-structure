import { onDeleteBooking, onFileExtensionUtil, onGetBooking, onPatchBooking, onPostAuth, onPostBooking, test } from "index"
test.describe("Booking scenario", () => {
    let testData: Record<string, any>
    let createBookingResult: Record<string, any>, updateBookingResult: Record<string, any>, getBookingResult: Record<string, any>, deleteBookingResult: Record<string, any>
    test.beforeAll(async () => {
        testData = await onFileExtensionUtil.readDataFromJsonFile("resources/testData/api/booking.json")
    })

    test("TC-01 Create Booking", { tag: ["@regression"] }, async () => {
        const reqBody = testData.createBooking
        await test.step("Send request to create booking", async () => {
            createBookingResult = await onPostBooking.createBooking(reqBody)
        })
        await test.step("Verify response create booking success", async () => {
            await onPostBooking.verifyCreateBookingSuccess(createBookingResult, reqBody)
        })
    })

    test("TC-02 Partially Update the Created Booking", { tag: ["@regression"] }, async () => {
        const reqBody = testData.updateBooking
        await test.step("Send request to update booking", async () => {
            const token = (await onPostAuth.createToken(testData.createToken)).body.token
            updateBookingResult = await onPatchBooking.updateBooking(createBookingResult.body.bookingid, token, reqBody)
        })
        await test.step("Verify response update booking success", async () => {
            await onPatchBooking.verifyUpdateBookingSuccess(updateBookingResult, createBookingResult.body.booking, reqBody)
        })
    })

    test("TC-03 Read the Updated Booking", { tag: ["@regression"] }, async () => {
        const reqBody = testData.updateBooking
        await test.step("Send request to get booking", async () => {
            getBookingResult = await onGetBooking.getBookingById(createBookingResult.body.bookingid)
        })
        await test.step("Verify response get booking success", async () => {
            await onGetBooking.verifyGetBookingSuccess(getBookingResult, updateBookingResult.body)
        })
    })

    test("TC-04 Delete the Booking", { tag: ["@regression"] }, async () => {
        await test.step("Send request to delete booking", async () => {
            const token = (await onPostAuth.createToken(testData.createToken)).body.token
            deleteBookingResult = await onDeleteBooking.deleteBookingById(createBookingResult.body.bookingid, token)
        })
        await test.step("Verify response get booking success", async () => {
            await onDeleteBooking.verifyDeleteBookingSuccess(deleteBookingResult)
        })
    })
})