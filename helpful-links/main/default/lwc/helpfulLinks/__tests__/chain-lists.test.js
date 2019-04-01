// createElement is what we'll use to create our component under test
import { createElement } from "lwc";
// helpfulLinks is the component being tested
import helpfulLinks from "c/helpfulLinks";
// Mock the navigation mixin
import { CurrentPageReference } from "lightning/navigation";
jest.mock("lightning/navigation");

// Construct the common components of the Helpful Links
let element;
beforeAll(() => {
    element = createElement("c-helpful-links", { is: helpfulLinks });
    element.linkIcons = "doctype:pdf;doctype:flash";
    element.linkTitles = "Sample Title; Sample Title";
    element.linkUrlsOrIds = "/;/";
    element.linkDescriptions = "Sample Description;Sample Description";
    element.navigationOptions = "URL";
    CurrentPageReference.mockReturnValue("/");
});

describe("Helpful Links Component", () => {
    it("is chained to another component", () => {
        // Given
        const expectedClassName = "slds-grid slds-wrap slds-color__background_gray-1 slds-box pull-up-margin";
        // When
        element.chainLists = true;
        document.body.appendChild(element);
        const className = element.shadowRoot.querySelector("div[data-id=linksList]").className;
        // Then
        expect(className).toBe(expectedClassName);
    });
    it("is not chained to another component", () => {
        // Given
        const expectedClassName = "slds-grid slds-wrap slds-color__background_gray-1 slds-box";
        // When
        element.chainLists = false;
        document.body.appendChild(element);
        const className = element.shadowRoot.querySelector("div[data-id=linksList]").className;
        // Then
        expect(className).toBe(expectedClassName);
    });
});