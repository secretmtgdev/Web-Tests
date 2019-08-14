var portFromCS;

function connected(p) {
  portFromCS = p;
  portFromCS.postMessage({ greeting: "Hi there content script!" });
  portFromCS.onMessage.addListener(m => {
    console.log("In background script, received message from content script");
    console.log(m.greeting);
  });
}

browser.runtime.onConnect.addListener(connected);
browser.browserAction.onClicked.addListener(() => {
  portFromCS.postMessage({ greeting: "The button was clicked" });
});
