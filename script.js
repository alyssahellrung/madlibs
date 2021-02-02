const inputPanel = document.querySelector("#inputPanel");
const outputPanel = document.querySelector("#outputPanel");
const warning = document.querySelector("#warning");

const submit = document.querySelector("#submit");
submit.addEventListener("click", writeStory, false);

const again = document.querySelector("#again");
again.addEventListener("click", resetPage, false);

document.querySelector("#firstName").focus();

const firstName = document.querySelector("#firstName");
const favColor = document.querySelector("#favColor");
const place = document.querySelector("#place");
const theStory = document.querySelector("#theStory");

window.addEventListener("keydown", keydownHandler, false);

inputPanel.className = "displayBlock";
outputPanel.className = "displayNone";
warning.className = "displayNone";

firstName.focus();

function keydownHandler(event) {
  if (event.keyCode === 13) {
    console.log("Enter key pressed");
    writeStory();
  }
}

function checkComplete() {
  // verify the user filled in the form (I did this differently than the tutorial guy did it)
  firstName.classList.remove("bgPink");
  favColor.classList.remove("bgPink");
  place.classList.remove("bgPink");

  if (firstName.value == "") {
    firstName.className = "bgPink";
  } 
  if (favColor.value == "") {
    favColor.className = "bgPink";
  } 
  if (place.value == "") {
    place.className = "bgPink";
  } 
  if (firstName.value == "" || favColor.value == "" || place.value == "") {
    warning.className = "displayBlock";
    return false;
  } else {
    return true;
  }
}

function writeStory() {
  // grab the input values to write the story
  if (checkComplete() == false) {
    return;
  }

  const storyText1 = "Welcome, " + firstName.value + ". ";
  const storyText2 = "Only silly people would choose " + favColor.value + " as their favorite color. ";
  const storyText3 = "It sounds like " + place.value + " would be a fantastic place to visit.";

  const newP1 = document.createElement("p");
  const newP2 = document.createElement("p");
  const newP3 = document.createElement("p");
  const newT1 = document.createTextNode(storyText1);
  const newT2 = document.createTextNode(storyText2);
  const newT3 = document.createTextNode(storyText3);
  newP1.appendChild(newT1);
  newP2.appendChild(newT2);
  newP3.appendChild(newT3);
  theStory.appendChild(newP1);
  theStory.appendChild(newP2);
  theStory.appendChild(newP3);

  inputPanel.className = "displayNone";
  outputPanel.className = "displayBlock";
  warning.className = "displayNone";
}

function resetPage() {
  // reset the page so the user can try again
  inputPanel.className = "displayBlock";
  outputPanel.className = "displayNone";
  warning.className = "displayNone";

  firstName.value = "";
  favColor.value = "";
  place.value = "";
  firstName.classList.remove("bgPink");
  favColor.classList.remove("bgPink");
  place.classList.remove("bgPink");
  theStory.innerHTML = "";

  firstName.focus();
}