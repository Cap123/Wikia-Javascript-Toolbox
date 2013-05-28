/*
 * Admin Area
 * Made for Club Penguin Wiki
 * By Cap123
*/
var ShoutOuts;
var groups = mw.config.get("wgUserGroups");
if(wgPageName == 'Special:AdminArea') {
if ((!groups.indexOf("sysop")) { /*
If you want to add certain users add after (!groups.indexOf("sysop"):
&& mw.config.get(allowedUser);
Then at the begging of the code add:
var allowedUser = "UserName's Here";
NOTE: This only allows one user to access the adminPanel.
*/
document.getElementById('mw-content-text').innerHTML = '<h1>ShoutOuts</h1><br /><p>' + ShoutOuts + '</p>';
}
else {
document.getElementById('mw-content-text').innerHTML = '<h1>Access Denied'</h1><br /><p>You must have Sysop (Administrator) Privileges to access the Admin Area.</p>';
}
else {
return;
}
}
if ((!groups.indexOf("sysop")) {document.write('<ul id="WikiaNotifications" class="WikiaNotifications"><li><div data-type="1" style="position: fixed; bottom: 28px; right: 5px"><font class="sprite close-notification"></font><center>[[Special:AdminArea|Don't forget to check out the Admin Area!]]</center></div></li></ul>'); } else { return; }
