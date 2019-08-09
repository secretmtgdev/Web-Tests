(function() {
  const TIME_OUT = 5;

  const tokenKey = "test";

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", () => checkTokens());
  } else {
    checkTokens();
  }

  function checkTokens() {
    var storageToken = localStorage.getItem(tokenKey);
    if (storageToken === null) {
      addNewToken();
    } else if (timeToRenew(storageToken)) {
      alert("OLD TOKEN EXPIRED, ADDING NEW TOKEN");
      localStorage.clear();
      addNewToken();
    }
  }

  function addNewToken() {
    localStorage.setItem(tokenKey, convertToSeconds(Date.now()));
  }

  function timeToRenew(oldTime) {
    var currSeconds = convertToSeconds(Date.now());
    console.log(`Old Time: ${oldTime}`);
    console.log(oldTime);
    console.log(`Current Time: ${currSeconds}`);
    return Math.abs(currSeconds - oldTime) > TIME_OUT;
  }

  function convertToSeconds(milliSeconds) {
    return milliSeconds / 1000;
  }
})();
