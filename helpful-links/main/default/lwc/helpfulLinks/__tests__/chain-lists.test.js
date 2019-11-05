import { createElement } from "lwc";
import helpfulLinks from "c/helpfulLinks";
import { CurrentPageReference } from "lightning/navigation";

describe("Helpful Links Component", () => {

    afterEach(() => {
        // The jsdom instance is shared across test cases in a single file so reset the DOM
        while (document.body.firstChild) {
            document.body.removeChild(document.body.firstChild);
        }
    });

    it("is chained to another component", () => {
        // Given
        let element = createElement("c-helpful-links", { is: helpfulLinks });
        element.linkIcons = "doctype:pdf;doctype:flash";
        element.linkTitles = "Sample Title; Sample Title";
        element.linkUrlsOrIds = "/;/";
        element.linkDescriptions = "Sample Description;Sample Description";
        element.navigationOptions = "URL";
        CurrentPageReference.mockReturnValue("/");
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
        let element = createElement("c-helpful-links", { is: helpfulLinks });
        element.linkIcons = "doctype:pdf;doctype:flash";
        element.linkTitles = "Sample Title; Sample Title";
        element.linkUrlsOrIds = "/;/";
        element.linkDescriptions = "Sample Description;Sample Description";
        element.navigationOptions = "URL";
        CurrentPageReference.mockReturnValue("/");
        const expectedClassName = "slds-grid slds-wrap slds-color__background_gray-1 slds-box";
        // When
        element.chainLists = false;
        document.body.appendChild(element);
        const className = element.shadowRoot.querySelector("div[data-id=linksList]").className;
        // Then
        expect(className).toBe(expectedClassName);
    });
});