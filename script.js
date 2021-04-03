let verseContainer;

document.addEventListener("DOMContentLoaded", function () {
  verseContainer = document.querySelector(".verse-containter");
  verseContainer.style.display = "none";
});

function generateVerse() {
  verseContainer.style.display = "block";
  let randomVerse = getRandomVerse();
  let username = getUsername();
  let personalVerse = randomVerse[0].replaceAll("يوزر", username);

  let txtVerse = document.getElementById("txtVerse");
  txtVerse.innerHTML =
    '<span><i class="fas fa-quote-left"></i></span> ' + personalVerse;

  let txtShahed = document.getElementById("shahed");
  txtShahed.innerHTML = " ~" + randomVerse[1];
}

function getRandomVerse() {
  let randomNumber = Math.floor(Math.random() * storedVerses.length);
  return storedVerses[randomNumber];
}

function getUsername() {
  return document.getElementById("txtName").value;
}
