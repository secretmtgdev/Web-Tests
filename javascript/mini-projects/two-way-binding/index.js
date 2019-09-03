(function() {
  "use strict";

  var userName = "";

  /**
   * Falsy types:
   *  1. Empty strings '', "", ``
   *  2. null
   *  3. undefined
   *  4. false
   *  5. 0
   */

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", e => {
      e.stopPropagation();
      e.preventDefault();
      bindInput();
    });
  } else {
    bindInput();
  }

  function bindInput() {
    document
      .querySelector("#name-space")
      .addEventListener("input", handleInputChange);
    document.addEventListener("click", clearInput);
  }

  function clearInput() {
    userName = "";
    document.querySelector("#name-space").value = userName;
    document.querySelector("#output").innerText = userName;
    alert("clicked doc");
  }

  function handleInputChange() {
    userName = this.value;
    if (!userName) {
      alert("Please enter some conent");
      document.querySelector("#output").innerText = userName;
    } else {
      document.querySelector("#output").innerText = userName;
    }
  }
})();
