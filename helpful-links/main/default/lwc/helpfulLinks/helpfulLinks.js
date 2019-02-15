import { LightningElement, api } from 'lwc';

export default class HelpfulLinks extends LightningElement {
    @api title;
    @api navigationOptions;
    @api linkIcons;
    @api linkTitles;
    @api linkUrlsOrIds;
    @api linkDescriptions;
    @api showTitle;
    @api chainLists;

    //Split the fields into arrays, check the lengths then build the objects

}