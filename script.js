let verseContainer;
let versesList;
document.addEventListener("DOMContentLoaded", function () {
  verseContainer = document.querySelector(".verse-containter");
  verseContainer.style.display = "none";
});

function generateVerse() {
  verseContainer.style.display = "block";
  versesList = getVerses();
  let randomVerse = getRandomVerse();
  let username = getUsername();
  let personalVerse = randomVerse[0].replaceAll("يوزر", username);

  let txtVerse = document.getElementById("txtVerse");
  txtVerse.innerHTML =
    '<span><i class="fas fa-quote-left"></i></span> ' + personalVerse;

  let txtShahed = document.getElementById("shahed");
  txtShahed.innerHTML = " ~" + randomVerse[1];
}

function getVerses(){
  
let selectedGender = document.querySelector('input[name="gender"]:checked').value;
if(selectedGender === "male")
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
