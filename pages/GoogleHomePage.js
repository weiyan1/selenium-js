const { By, Key, until } = require("selenium-webdriver");

class GoogleHomePage {

    constructor(driver) {
        this.driver = driver;

        // Locators
        this.searchBox = By.name("q");
        this.logo = By.css("img[alt='Google']");
    }

    async open(url) {
        await this.driver.get(url);
    }

    async getTitle() {
        return await this.driver.getTitle();
    }

    async isLogoDisplayed() {
        return await this.driver.findElement(this.logo).isDisplayed();
    }

    async isSearchBoxDisplayed() {
        return await this.driver.findElement(this.searchBox).isDisplayed();
    }

    async clickLinkByText(linkText) {
        await this.driver.findElement(By.linkText(linkText)).click();
    }

    async search(text) {
        const search = await this.driver.findElement(this.searchBox);
        await search.sendKeys(text, Key.RETURN);
        await this.driver.wait(until.urlContains("/search"), 10000);
    }
}

module.exports = GoogleHomePage;
