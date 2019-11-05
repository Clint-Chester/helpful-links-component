const { jestConfig } = require("@salesforce/sfdx-lwc-jest/config");
module.exports = {
    ...jestConfig,
    moduleNameMapper: {
        "^lightning/navigation$":
            "<rootDir>/helpful-links/test/jest-mocks/lightning/navigation"
    }
};