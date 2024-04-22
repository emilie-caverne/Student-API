// Interdit de copier l'intitulé de la question
document.addEventListener("copy", function (e) {
  const selection = window.getSelection();
  const h1Titles = document.querySelectorAll("h1");

  h1Titles.forEach(function (title) {
    if (selection.containsNode(title, true)) {
      e.preventDefault();
      showAlert("La copie l'intitulé de la question est interdite.");
    }
  });
});

//Interdit de coller dans l'input
document.addEventListener("DOMContentLoaded", function () {
  const testInput = document.querySelector('input[type="text"]');
  if (testInput) {
    testInput.addEventListener("paste", function (e) {
      e.preventDefault();
      showAlert("Le collage est interdit dans ce champ.");
    });
  }
});
//Message si tentative de copier ou coller
function showAlert(message) {
  alert(message);
}

//Changement de fenetre
document.addEventListener("visibilitychange", function () {
  if (
    document.hidden &&
    (window.location.pathname.includes("test.html") ||
      window.location.pathname.includes("test1.html") ||
      window.location.pathname.includes("test2.html"))
  ) {
    window.location.href = "index.html";
  }
});

//Reduction taille de fenetre
window.addEventListener("resize", function () {
  if (
    window.location.pathname.includes("test.html") ||
    window.location.pathname.includes("test1.html") ||
    window.location.pathname.includes("test2.html")
  ) {
    window.location.href = "index.html";
  }
});

//utilisation ChatGPT
window.addEventListener("beforeunload", function (event) {
  const url = event.currentTarget.document.URL;
  if (url.includes("chatgpt")) {
    window.open("index.html", "_self");
  }
});

// on click fonction addLogin

import { addLogin } from "./fetch.js";
document.addEventListener("DOMContentLoaded", function () {
  const boutonCommencerTest = document.getElementById("test");
  if (boutonCommencerTest) {
    boutonCommencerTest.addEventListener("click", function () {
      addLogin();
    });
  }
});
// on click fonction addReponse_1

import { addReponse } from "./fetch.js";

document.addEventListener("DOMContentLoaded", function () {
  const boutonSuivant = document.getElementById("suivant");
  if (boutonSuivant) {
    boutonSuivant.addEventListener("click", function () {
      addReponse();
    });
  }
});
