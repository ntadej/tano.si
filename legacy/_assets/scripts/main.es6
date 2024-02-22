//= require tracking_cookies
//= require navigation
//= require tabs

$(document).ready(() => {
  TrackingCookies.init();
  Navigation.init();

  Tabs.init('tutfizika');
})
