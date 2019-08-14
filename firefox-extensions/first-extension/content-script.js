var myPort = browser.runtime.connect({ name: "port-from-cs" });
myPort.postMessage({ geeting: "Hello from content script" });

myPort.onMessage.addListener(m => {
  console.log("In content script, received message from background script");
  console.log(m.greeting);
});

document.body.addEventListener("click", () => {
  myPort.postMessage({ greeting: "The page was clicked!" });
});
