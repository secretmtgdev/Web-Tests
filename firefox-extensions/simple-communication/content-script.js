function handleResponse(message) {
  console.log(`Message from the background script: ${message.response}`);
}

function handleError(error) {
  console.log(`Error: ${error}`);
}

function notifyBackgroundPage(e) {
  var sending = browser.runtime.sendMessage(
    "MicrosoftSolitaire@microsoft.com",
    {
      greeting: "Greeting from the content script"
    }
  );
  sending.then(handleResponse, handleError);
  console.log(browser.runtime.getURL("icons/tesasdft.png"));
}

window.addEventListener("click", notifyBackgroundPage);
