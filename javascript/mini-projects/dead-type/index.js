(function() {
  "use strict";

  var startTime, selectedWord;

  const wordMapping = new Map([
    ["two", ["as", "at", "ha"]],
    ["three", ["bat", "cat", "hat"]],
    ["four", ["test", "best", "west"]]
  ]);

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", () => {
      init();
    });
  } else {
    init();
  }

  function init() {
    selectWord("four");
  }

  function selectWord(wordLength) {
    var words = wordMapping.get(wordLength);
    selectedWord = words[Math.round(Math.random() * (words.length - 1))];
    fadeInOutMessage(`Your word is: ${selectedWord}`);
  }

  function fadeInOutMessage(message) {
    $("#display-word").append(`<p>${message}</p>`);
    $("#display-word").fadeIn(2000, "linear", () => {
      $("#display-word").fadeOut(2000, "linear", () => {
        $("#type-word").show();
        $("#time").show();
        startTime = new Date().getSeconds();
        setInterval(timeSpelling, 1000);
      });
    });
  }

  function timeSpelling() {
    var currentSecond = new Date().getSeconds();
    var timeElapsed = currentSecond - startTime;

    // quit everthing after five seconds
    if (timeElapsed > 5) {
      deletePage();
    } else {
      $("#time").html(`<p><strong>Time Elapsed</strong>:${timeElapsed}</p>`);
    }
  }

  function deletePage() {
    document.write("Time is up!!");
  }
})();
