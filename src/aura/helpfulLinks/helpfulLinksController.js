({
	doInit : function(cmp) {
		//get the variables to build the link list
		var linkIcons = cmp.get("v.linkIcons").split(",");
        var linkTitles = cmp.get("v.linkTitles").split(",");
        var linkUrls = cmp.get("v.linkUrls").split(",");
        var linkDescription = cmp.get("v.linkDescription").split(",");

        //check that all the link elements are the same size
        if(linkIcons.length === linkTitles.length && linkIcons.length === linkUrls.length && linkIcons.length === linkDescription.length && linkTitles.length === linkUrls.length && linkTitles.length === linkDescription.length && linkUrls.length === linkDescription.length) {
            //determine correct margin to use for this list
            var chainLists = cmp.get("v.chainLists");
            if(chainLists === true) {
                var linksContainer = cmp.find("linksContainer");
                $A.util.addClass(linksContainer, "pull-up-margin");
            }
            //now build the list
            var helpfulLinks = cmp.get("v.helpfulLinks");
            for(var i=0; i<linkIcons.length; i+=1){
                helpfulLinks.push({
                    'icon':linkIcons[i],
                    'title': linkTitles[i],
                    'url': linkUrls[i],
                    'description': linkDescription[i]
                });
            }
            cmp.set("v.helpfulLinks", helpfulLinks);
        } else{
            cmp.set("v.errorOccurred", true);
        }
	},

    previewFile : function(cmp, event) {
        var helpfulLinks = cmp.get("v.helpfulLinks");
        switch(cmp.get("v.navigateOption")) {
            case 'URL':
                $A.get('e.force:navigateToURL').fire({
                    url: helpfulLinks[event.target.dataset.recordcount].url
                });
                break;
            case 'Salesforce Content':
                $A.get('e.lightning:openFiles').fire({
                    recordIds: [helpfulLinks[event.target.dataset.recordcount].url]
                });
                break;
            case 'SObject Record':
                $A.get('e.force:navigateToSObject').fire({
                    recordId: helpfulLinks[event.target.dataset.recordcount].url
                });
                break;
            default:
                //As these switch values are guaranteed, this should never happen
        }
    }
})