

function generateVerse() {
  let randomVerse = getRandomVerse();
  let username = getUsername();
  let personalVerse = randomVerse.replace("يوزر", username);
  let txtVerse = document.getElementById("txtVerse");
  txtVerse.innerHTML = '<span><i class="fas fa-quote-left"></i></span> '
			+ personalVerse;
  console.log(randomVerse);
}

function getRandomVerse(){
  let randomNumber = Math.floor(Math.random() * storedVerses.length);
  return storedVerses[randomNumber];
}

function getUsername(){
  return document.getElementById("txtName").value;
}

function tweet() {
  let twitterLink = document.getElementsByClassName("twitter-share-button")[0];
  let txtQuote = document.getElementById("txtQuote");
  twitterLink.href += txtQuote.innerText;
}
