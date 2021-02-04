const inputPanel = document.querySelector("#inputPanel");
const outputPanel = document.querySelector("#outputPanel");
const warning = document.querySelector("#warning");

const submit = document.querySelector("#submit");
submit.addEventListener("click", writeStory, false);

const again = document.querySelector("#again");
again.addEventListener("click", resetPage, false);

document.querySelector("#adjective1").focus();

const adjective1 = document.querySelector("#adjective1");
const timeperiod = document.querySelector("#time");
const pnoun1 = document.querySelector("#pnoun1");
const pnoun2 = document.querySelector("#pnoun2");





const theStory = document.querySelector("#theStory");

window.addEventListener("keydown", keydownHandler, false);

inputPanel.className = "displayBlock";
outputPanel.className = "displayNone";
warning.className = "displayNone";

adjective1.focus();

function keydownHandler(event) {
  if (event.keyCode === 13) {
    console.log("Enter key pressed");
    writeStory();
  }
}

function checkComplete() {
  // Verify the user filled in the form 
  removePinkBG();

  if (adjective1.value == "") {
    adjective1.className = "bgPink";
  } 
  if (timeperiod.value == "") {
    timeperiod.className = "bgPink";
  } 
  if (pnoun1.value == "") {
    pnoun1.className = "bgPink";
  } 
  if (pnoun2.value == "") {
    pnoun2.className = "bgPink";
  } 
  if (adjective1.value == "" || timeperiod.value == "" || pnoun1.value == "" || pnoun2.value == "") {
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

  const storyText1 = "Today we are going to the " + adjective1.value + " circus! The circus only comes to town once per " + timeperiod.value + ". All of the " + pnoun1.value + " and " + pnoun2.value + " look forward to the show.";
  // const storyText2 = "Only silly people would choose " + favColor.value + " as their favorite color. ";
  // const storyText3 = "It sounds like " + place.value + " would be a fantastic place to visit.";

  addTextNode(storyText1);
  // addTextNode(storyText2);
  // addTextNode(storyText3);
  // addTextNode(storyText4);
  // addTextNode(storyText5);
  // addTextNode(storyText6);

  inputPanel.className = "displayNone";
  outputPanel.className = "displayBlock";
  warning.className = "displayNone";
}

function addTextNode(text) {
  const newP = document.createElement("p");
  const newT = document.createTextNode(text);
  newP.appendChild(newT);
  theStory.appendChild(newP);
} 

function resetPage() {
  // reset the page so the user can try again
  inputPanel.className = "displayBlock";
  outputPanel.className = "displayNone";
  warning.className = "displayNone";

  adjective1.value = "";
  timeperiod.value = "";
  pnoun1.value = "";
  pnoun2.value = "";

  removePinkBG();

  theStory.innerHTML = "";

  adjective1.focus();
}

function removePinkBG() {
  adjective1.classList.remove("bgPink");
  timeperiod.classList.remove("bgPink");
  pnoun1.classList.remove("bgPink");
  pnoun2.classList.remove("bgPink");
}