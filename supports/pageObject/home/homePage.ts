import { Page, expect } from "index"
import LocatorHomePage from "@pageObjects/home/locatorHomePage"

export class LoginPage {
    private readonly page: Page;

    constructor(page: Page) {
        this.page = page
    }

    public async gotoHomePage () {
        
    }
}