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
  if (firstName.value == "" || favColor.value == "" || place.value =="") {
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

  let finishedStory = ""
  finishedStory += "Welcome, " + firstName.value + ". "
  finishedStory += "Only silly people would choose " + favColor.value + " as their favorite color. "
  finishedStory += "It sounds like " + place.value + " would be a fantastic place to visit."

  theStory.innerHTML = finishedStory;

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
  theStory.innerHTML = "";

  firstName.focus();
}