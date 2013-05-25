if (wgCanonicalSpecialPageName == 'UserInformation') {
document.getElementById('mw-content-text').innerHTML = '<p>Your username is:<br />' + mw.config.wgUserName(); + '<br /><br /><p>Your ID is:<br />' + mw.config.wgUserId(); =
+ '</p>';
}
