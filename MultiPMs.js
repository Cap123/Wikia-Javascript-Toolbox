/*
 *Credit to Joeytje50 of RSW
 * Edited and remade by Cap123
 */

if(wgCanonicalSpecialPageName == 'Chat') {
function openPMWindow() {
$('body').append('<section style="left: 50%; top: 50px; width: 434px; z-index: 2000000002; margin-left: -222px;" class="modalWrapper" id="startPMWindow"><button class="close wikia-chiclet-button" onclick="cancelPM()"><img src="http://slot2.images.wikia.nocookie.net/__cb57523/common/skins/oasis/images/icon_close.png"></button><h1>Multi-PM</h1><section class="modalContent"><div><form method="" name="" class="WikiaForm "><fieldset><p>Enter usernames here, separated by a comma and a space.</p><input type="text" name="multipminput" id="multipminput" /></fieldset></form><div style="float:right;"><a onclick="startPM()" class="wikia-button">PM!</a>&nbsp;<a onclick="cancelPM()" id="cancel" class="wikia-button secondary">Cancel</a></div></section></section>');
$('body').append('<div style="height: 100%; width: 100%; z-index: 2000000001; opacity: 0.65; display: block;" data-opacity="0.65" class="blackout"></div>');
}
function startPM() {
var multipm = $('#multipminput').val()
if (multipm.length != 0) {
var usersToPM = multipm.split(", ");
mainRoom.openPrivateChat(usersToPM);
$('#startPMWindow').remove();
$('.blackout').remove();
}
}
 
function cancelPM() {
$('#startPMWindow').remove();
$('.blackout').remove();
}
$('form#Write').append('<a class="wikia-button" href="javascript:openPMWindow()" style="position:absolute; right:50px; top:0;">PM</a>');
}
