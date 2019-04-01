import { LightningElement, api, track } from "lwc";
import { NavigationMixin } from "lightning/navigation";

export default class HelpfulLinks extends NavigationMixin(LightningElement) {
    //All of the settings that can be defined for the component
    @api title;
    @api navigationOptions;
    @api showTitle;
    @api chainLists;
    @api
    get linkIcons() {
        return this._linkIcons;
    }
    set linkIcons(value) {
        this._linkIcons = value.split(";");
        //Use this value to compare the lengths across all other settings
        this._linkSettingsCount = this._linkIcons.length;
    }
    @api
    get linkTitles() {
        return this._linkTitles;
    }
    set linkTitles(value) {
        this._linkTitles = value.split(";");
    }
    @api
    get linkUrlsOrIds() {
        return this._linkUrlsOrIds;
    }
    set linkUrlsOrIds(value) {
        this._linkUrlsOrIds = value.split(";");
    }
    @api
    get linkDescriptions() {
        return this._linkDescriptions;
    }
    set linkDescriptions(value) {
        this._linkDescriptions = value.split(";");
    }

    //Holds the constructed links to be rendered. Needs to be tracked for the URL display to work.
    @track
    links = [];

    //Used to return an error back to the user
    errorOccurred = false;
    errorMessage = "";

    renderedCallback() {
        //With the DOM being rendered, check whether the lists should be chained
        if(this.chainLists) {
            this.template.querySelector("div[data-id=linksList]").className = this.template.querySelector("div[data-id=linksList]").className + " pull-up-margin";
        }
    }

    connectedCallback() {
        //Check that all the link settings are the same length
        if([this.linkIcons, this.linkTitles, this.linkUrlsOrIds, this.linkDescriptions].every(this.linkLengthSettingsMatch, this)) {
            //Set the links
            for(let i = 0; i < this._linkSettingsCount; i++) {
                let pageRef = this.constructPageRef(this.linkUrlsOrIds.shift());
                this.links.push({
                    "icon" : this.linkIcons.shift(),
                    "title" : this.linkTitles.shift(),
                    "location" : pageRef,
                    "url" : this[NavigationMixin.GenerateUrl](pageRef).then((url) => {this.links[i].url = url;}),
                    "description" : this.linkDescriptions.shift()
                });
            }
        }
        else {
            //Set the error
            this.errorOccurred = true;
            this.errorMessage = "Please ensure that when you fill out the icons, titles, urls and descriptions that they all have the same amount of semi colons.";
        }
    }

    navigateToTarget(event) {
        //Stop the event's default behavior.
        event.preventDefault();
        //Stop the event from bubbling up in the DOM.
        event.stopPropagation();
        //Navigate to the record page.
        this[NavigationMixin.Navigate](this.links[event.target.dataset.recordcount].location);
    }

    constructPageRef(urlOrId) {
        switch(this.navigationOptions) {
            case "URL":
                return {
                    type: "standard__webPage",
                    attributes: {
                        url: urlOrId
                    }
                };
            case "Salesforce File":
                return {
                    type: "standard__namedPage",
                    attributes: {
                        pageName: "filePreview"
                    },
                    state : {
                        recordIds: urlOrId
                    }
                };
            case "Record Page":
                return {
                    type: "standard__recordPage",
                    attributes: {
                        recordId: urlOrId,
                        actionName: "view"
                    }
                };
            default:
                //As these switch values are guaranteed, this should never happen
                return null;
        }
    }

    //Utility for checking setting lengths
    linkLengthSettingsMatch(setting) {
        return setting.length === this._linkSettingsCount;
    }
}