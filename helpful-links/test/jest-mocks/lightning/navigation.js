/**
 * For the original lightning/navigation mock that comes by default with
 * @salesforce/lwc-jest, see:
 * https://github.com/salesforce/lwc-jest/blob/master/src/lightning-mocks/navigation/navigation.js
 */
export const CurrentPageReference = jest.fn();

const Navigate = Symbol("Navigate");
const GenerateUrl = Symbol("GenerateUrl");
export const NavigationMixin = (Base) => {
    return class extends Base {
        [Navigate](pageReference, replace) {}
        [GenerateUrl](pageReference) {
            return new Promise((resolve) => {
                switch(pageReference.type) {
                    case 'standard__webPage':
                        resolve(pageReference.attributes.url);
                }
            });
        }
    };
};
NavigationMixin.Navigate = Navigate;
NavigationMixin.GenerateUrl = GenerateUrl;