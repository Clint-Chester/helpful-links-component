# Helpful Links Component

[![Codacy Badge](https://api.codacy.com/project/badge/Grade/92e2923287564584bd216d591d10440e)](https://www.codacy.com/app/Clint-Chester/Helpful-Links-Component?utm_source=github.com&amp;utm_medium=referral&amp;utm_content=Clint-Chester/helpful-links-component&amp;utm_campaign=Badge_Grade)
[![Language grade: JavaScript](https://img.shields.io/lgtm/grade/javascript/g/Clint-Chester/helpful-links-component.svg?logo=lgtm&logoWidth=18)](https://lgtm.com/projects/g/Clint-Chester/helpful-links-component/context:javascript)
[![Total alerts](https://img.shields.io/lgtm/alerts/g/Clint-Chester/helpful-links-component.svg?logo=lgtm&logoWidth=18)](https://lgtm.com/projects/g/Clint-Chester/helpful-links-component/alerts/)
[![Known Vulnerabilities](https://snyk.io/test/github/Clint-Chester/helpful-links-component/badge.svg?targetFile=package.json)](https://snyk.io/test/github/Clint-Chester/helpful-links-component?targetFile=package.json)
[![codecov](https://codecov.io/gh/Clint-Chester/helpful-links-component/branch/master/graph/badge.svg)](https://codecov.io/gh/Clint-Chester/helpful-links-component)

A Salesforce Lightning Component that allows users to show useful links for users on Lightning pages. I initially made this for my cricket club's Salesforce instance to help our users in finding contextual content in Salesforce and thought it would be useful to share.

<img width="439" alt="Helpful Links Component" src="https://user-images.githubusercontent.com/12729644/55665966-7abd6e00-587a-11e9-8e2d-6353c6135e50.png">

[![Deploy](https://deploy-to-sfdx.com/dist/assets/images/DeployToSFDX.svg)](https://deploy-to-sfdx.com)

<h2>Features</h2>
The three types of content that can be populated in this component are:
<ul>
  <li>URLs - any web urls internal or external to Salesforce. Comman usages in the past have been links to popular dashboards as an example.</li>
  <li>Salesforce Files and Salesforce Content - for any files or content that have been uploaded into Salesforce, a record id for each file / content item can be provided and the native preview functionality will be used to view this information. These instructions assume that you have configured the correct security requirements for users to be able to view the files and content.</li>
  <li>Salesforce Object Records - navigate to any record in Salesforce by simply providing the record id</li>
</ul>
<p>The following lists key features regarding this component and the options available via Lightning App Builder:</p>
<ul>
  <li>Navigation Options - this option to determines whether the content link is either for a URL, Salesforce Content or Salesforce Object Records.</li>
  <li>Show Title - this checkbox controls whether you need to display a title for your helpful links. You may not want to show a title if this links list is already under a tab for example. If you are wishing to chain lists together, ensure this is unchecked.</li>
  <li>Chain Lists - enabling this checkbox counteracts the enforced margins Salesforce puts in place when dropping a Lightning Component on a Lightning Page. Currently that enforced margin is 1rem. Enable this feature if you are looking to have a single list which is mixed with URLs and Salesforce Files / Content.</li>
</ul>
<h2>How to use this component</h2>
<p>There are some key points that need to be considered when populating content for this component:</p>
<ul>
  <li>For creating items in the links list, each item is created by separating each thing with a semicolon. e.g. Link 1;Link 2 will result in creating two items being displayed in the links list. It is essential that Link Icons, Link Titles, Link URLs or Record IDs and Link Descriptions are all the same length.</li>
  <li>If you are not wanting to add descriptions for your links as an example just leave blank spaces e.g. ; ;</li>
</ul>
<p>The following lists out the steps involved when filling in content for this component via Lightning App Builder:</p>
<ol>
  <li>Title - Complete the title field if you are showing a title for this helpful links component</li>
  <li>Link Icons - The icons for each item in the list are inheritied from Salesforce's Lightning Design System. The Lightning Design System name of the icon is used for each item in the list. Names are written in the format 'utility:down' where 'utility' is the category, and 'down' is the specific icon to be displayed. All icons available can be found <a href="https://lightningdesignsystem.com/icons/" target="_blank">here</a>. For each icon in the list they must be separated by a semicolon.</li>
  <li>Link Titles - The clickable element that will be displayed for the users. For each link title in the list they must be separated by a semicolon.</li>
  <li>Link URLs or Record IDs - If the Salesforce Content Links checkbox is enabled, enter each record id of the file separated by a semicolon. If this checkbox isn't enabled, enter the URL for each item in the list separated by a semicolon.</li>
  <li>Link Description - The description that is dsiplayed underneath the link title. Each description must be separated by a semicolon for each item in the list. If you don't want to add a description add semicolons with blank spaces e.g. ; ;</li>
</ol>
