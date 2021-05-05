var verseContainer;
var versesList;
document.addEventListener("DOMContentLoaded", function() {
  verseContainer = document.querySelector(".verse-containter");
  verseContainer.style.display = "none";
});

var randomNumber = Math.floor(Math.random() * background_url.length);
var url = background_url[randomNumber];
document.body.style.backgroundImage = "url('" + url + "')";

function generateVerse() {
  verseContainer.style.display = "block";
  versesList = getVerses();
  var randomVerse = getRandomVerse();
  var username = getUsername();
  var personalVerse = randomVerse[0].replaceAll("يوزر", username);

  var txtVerse = document.getElementById("txtVerse");
  txtVerse.innerHTML =
    '<span><i class="fas fa-quote-left"></i></span> ' + personalVerse;

  var txtShahed = document.getElementById("shahed");
  txtShahed.innerHTML = " ~" + randomVerse[1];
}

function getVerses() {
  var selectedGender = document.querySelector('input[name="gender"]:checked').value;
  if (selectedGender === "male")
    return storedVerses;

  return arabicFemaleVerses;
}

function getRandomVerse() {
  var randomNumber = Math.floor(Math.random() * versesList.length);
  return versesList[randomNumber];
}

function getUsername() {
  return document.getElementById("txtName").value;
}
