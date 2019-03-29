// createElement is what we'll use to create our component under test
import { createElement } from 'lwc';
// helpfulLinks is the component being tested
import helpfulLinks from 'c/helpfulLinks';

describe('Helpful Links Component', () => {
    it('is chained to another component', () => {
        // Given
        const expectedClassName = 'slds-grid slds-wrap slds-color__background_gray-1 slds-box pull-up-margin';
        // When
        const element = createElement('c-helpful-links', { is: helpfulLinks });
        element.linkIcons = 'doctype:pdf;doctype:flash';
        element.linkTitles = 'Sample Title; Sample Title';
        element.linkUrlsOrIds = '/;/';
        element.linkDescriptions = 'Sample Description;Sample Description';
        element.chainLists = true;
        document.body.appendChild(element);
        const className = element.shadowRoot.querySelector('div[data-id=linksList]').className;
        // Then
        expect(className).resolves.toBe(expectedClassName);
    });
});