if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", event => {
    setUp();
  });
} else {
  setUp();
}

function setUp() {
  if (inChrome()) {
    noThanksHandler();
    checkForExtension();
  } else {
    document.getElementById("exp-promotional-banner-1").style.display = "none";
  }
}

function inChrome() {
  return (
    navigator.userAgent.indexOf("Chrome") > -1 &&
    navigator.vendor === "Google Inc."
  );
}

function noThanksHandler() {
  var noThanks = document.getElementById("no-thanks");
  noThanks.addEventListener("click", event => {
    event.preventDefault();
    var banner = document.getElementById("exp-promotional-banner-1");
    banner.parentNode.removeChild(banner);
  });
}

function checkForExtension() {
  if (chrome && chrome.runtime && chrome.runtime.sendMessage) {
    chrome.runtime.sendMessage(
      "idnnmiboanpjnefeadofapkmkimlgfla",
      {
        greeting: "ping"
      },
      response => {
        if (chrome.runtime.lastError) {
          alert(
            "Extension may be turned off or this page is not allowed to connect with the extension."
          );
          $("#exp-promotional-banner-1").show();
        } else if (response.greeting === "pong") {
          alert("successful connection");
          $("#exp-promotional-banner-1").hide();
        }
      }
    );
  } else {
    $("#exp-promotional-banner-1").show();
    alert(
      "Either you don't have the Microsoft Solitaire extension or this page is not authorized under the extension."
    );
  }
}
