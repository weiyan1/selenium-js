module.exports = {
    url: "https://www.google.com",

    pageTitle: "Google",

    navigationLinks: {
        header: ["Gmail", "Images"],
        footer: ["About", "Store"]
    },

    searchData: {
        validSearchText: "Selenium WebDriver",
        anotherSearchText: "Page Object Model Selenium"
    },

    expectedUrls: {
        search: "/search",
        gmail: "mail.google.com",
        images: "tbm=isch"
    }
};
