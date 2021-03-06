let verseContainer;
let versesList;
document.addEventListener("DOMContentLoaded", function() {
  verseContainer = document.querySelector(".verse-containter");
  verseContainer.style.display = "none";
});

let randomNumber = Math.floor(Math.random() * background_url.length);
let url = background_url[randomNumber];
document.body.style.backgroundImage = "url('" + url + "')";

function generateVerse() {
  removeBackgroundColorFromGender();
  verseContainer.style.display = "block";
  versesList = getVerses();
  let randomVerse = getRandomVerse();
  let username = getUsername();
  let personalVerse = randomVerse[0].split("يوزر").join(username);

  let txtVerse = document.getElementById("txtVerse");
  txtVerse.innerHTML =
    '<span><i class="fas fa-quote-left"></i></span> ' + personalVerse;

  let txtShahed = document.getElementById("shahed");
  txtShahed.innerHTML = " ~" + randomVerse[1];
}

function removeBackgroundColorFromGender(){
  let genderContainer = document.querySelector(".gender");
  genderContainer.style.backgroundColor = "initial";
}

function getVerses() {
  let selectedGender = document.querySelector('input[name="gender"]:checked').value;
  if (selectedGender === "male")
    return storedVerses;

  return arabicFemaleVerses;
}

function getRandomVerse() {
  let randomNumber = Math.floor(Math.random() * versesList.length);
  return versesList[randomNumber];
}

function getUsername() {
  return document.getElementById("txtName").value;
}
