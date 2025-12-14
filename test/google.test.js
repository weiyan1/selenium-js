const { Builder, until } = require("selenium-webdriver");
const { expect } = require("chai");

const GoogleHomePage = require("../pages/GoogleHomePage");
const testData = require("../testData/googleTestData");

describe("Google Website Verification (POM + Test Data)", function () {

    let driver;
    let googleHome;

    this.timeout(30000);

    before(async () => {
        driver = await new Builder().forBrowser("chrome").build();
        googleHome = new GoogleHomePage(driver);
    });

    after(async () => {
        await driver.quit();
    });

    beforeEach(async () => {
        await googleHome.open(testData.url);
    });

    it("should load Google home page", async () => {
        const title = await googleHome.getTitle();
        expect(title).to.include(testData.pageTitle);

        expect(await googleHome.isLogoDisplayed()).to.be.true;
    });

    it("should display the search box", async () => {
        expect(await googleHome.isSearchBoxDisplayed()).to.be.true;
    });

    it("should perform a valid search", async () => {
        await googleHome.search(testData.searchData.validSearchText);

        const currentUrl = await driver.getCurrentUrl();
        expect(currentUrl).to.include(testData.expectedUrls.search);
    });

    it("should verify header navigation links", async () => {
        for (const link of testData.navigationLinks.header) {
            const element = await driver.findElement({ linkText: link });
            expect(await element.isDisplayed()).to.be.true;
        }
    });

    it("should verify footer navigation links", async () => {
        for (const link of testData.navigationLinks.footer) {
            const element = await driver.findElement({ linkText: link });
            expect(await element.isDisplayed()).to.be.true;
        }
    });

    it("should navigate to Images page", async () => {
        await googleHome.clickLinkByText("Images");

        await driver.wait(until.urlContains(testData.expectedUrls.images), 10000);
        expect(await driver.getCurrentUrl())
            .to.include(testData.expectedUrls.images);
    });

});
