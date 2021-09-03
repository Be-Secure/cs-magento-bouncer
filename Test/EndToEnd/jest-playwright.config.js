const headless = process.env.HEADLESS;
const slowMo = process.env.SLOWMO;
module.exports = {
    launchOptions: {
        headless,
    },
    connectOptions: { slowMo },
    exitOnPageError: false,
    contextOptions: {
        ignoreHTTPSErrors: true,
    },
    browsers: ["chromium"],
    devices: ["Desktop Chrome"],
};
