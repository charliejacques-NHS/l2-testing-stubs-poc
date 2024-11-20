const today = new Date();
const inAnHour = new Date();

inAnHour.setHours(today.getHours() + 1);

const addToCalendarObject = {
  subject: "Test Subject",
  body: "This is a test event",
  startTimeEpochInSeconds: today.getTime() / 1000,
  endTimeEpochInSeconds: inAnHour.getTime() / 1000,
}

function addToCalendar() {
  console.log('JSON.stringify(addToCalendarObject) :>> ', JSON.stringify(addToCalendarObject));
  window.nhsappNative.addEventToCalendar(JSON.stringify(addToCalendarObject));
}

const HELP_URL = "https://www.nhs.uk/nhs-app/nhs-app-help-and-support/nhs-app-account-and-settings-new/managing-your-nhs-app-account-new/";
function openWebIntegration() {
  const app = window.nativeApp;
  if (app) {
    const urlRequest = JSON.stringify({ url: 'http://web.local.bitraft.io:3000/web-integration/index.html', additionalDomains: [], helpUrl: HELP_URL });
    app.openWebIntegration(urlRequest);
  } else {
    window.location.href = 'web-integration/index.html';
  }
}

function sessionExtend() {
  customAlert("Session Extended !");
}

function authLogout() {
  customAlert("Logged out !");
}

function sessionExpired() {
  customAlert("Session Expired !");
}

function goToPage(page) {
  customAlert("go to page", page);
  switch (page) {
    case "Home":
      window.location.href = "index.html";
      break;
    case "Services":
    case "YourHealthHubPage":
    case "Messages":
      // navigate to messages.html
      window.location.href = "messages.html";
      break;
    case "AccountSettings":
    default:
      break;
  }
}

function navigationGoToHome() { goToPage("Home") }
function navigationGoToServices() { goToPage("Services") }
function navigationGoToYourHealthHubPage() { goToPage("YourHealthHubPage") }
function navigationGoToMessages() { goToPage("Messages") }
function navigationGoToAccountSettings() { goToPage("AccountSettings") }

window.nativeAppCallbacks = { sessionExtend, authLogout, sessionExpired, navigationGoToHome, navigationGoToServices, navigationGoToYourHealthHubPage, navigationGoToMessages, navigationGoToAccountSettings };

function callSessionExpiry() {
  window.nativeApp.onSessionExpiring();
}

function customAlert(msg) {
  var iframe = document.createElement("IFRAME");
  iframe.setAttribute("src", "data:text/plain,");
  document.documentElement.appendChild(iframe);
  window.frames[0].window.alert(msg);
  iframe.parentNode.removeChild(iframe);
}
