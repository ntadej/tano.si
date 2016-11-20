//= require scripts/tracking_cookies
//= require scripts/navigation
//= require scripts/tabs

$(document).ready(() => {
  TrackingCookies.init();
  Navigation.init();

  Tabs.init('tutfizika');
})
