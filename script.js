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
const verb1 = document.querySelector("#verb1");
const noun1 = document.querySelector("#noun1");
const noun2 = document.querySelector("#noun2");
const adjective2 = document.querySelector("#adjective2");
const adjective3 = document.querySelector("#adjective3");
const adjective4 = document.querySelector("#adjective4");
const pnoun3 = document.querySelector("#pnoun3");
const adjective5 = document.querySelector("#adjective5");
const adjective6 = document.querySelector("#adjective6");
const adjective7 = document.querySelector("#adjective7");
const pnoun4 = document.querySelector("#pnoun4");
const exclamation = document.querySelector("#exclamation");
const adjective8 = document.querySelector("#adjective8");
const adverb = document.querySelector("#adverb");
const noun3 = document.querySelector("#noun3");
const adjective9 = document.querySelector("#adjective9");

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
  if (verb1.value == "") {
    verb1.className = "bgPink";
  } 
  if (noun1.value == "") {
    noun1.className = "bgPink";
  } 
  if (noun2.value == "") {
    noun2.className = "bgPink";
  } 
  if (adjective2.value == "") {
    adjective2.className = "bgPink";
  } 
  if (adjective3.value == "") {
    adjective3.className = "bgPink";
  } 
  if (adjective4.value == "") {
    adjective4.className = "bgPink";
  } 
  if (pnoun3.value == "") {
    pnoun3.className = "bgPink";
  }
  if (adjective5.value == "") {
    adjective5.className = "bgPink";
  } 
  if (adjective6.value == "") {
    adjective6.className = "bgPink";
  } 
  if (adjective7.value == "") {
    adjective7.className = "bgPink";
  } 
  if (pnoun4.value == "") {
    pnoun4.className = "bgPink";
  } 
  if (exclamation.value == "") {
    exclamation.className = "bgPink";
  }  
  if (adjective8.value == "") {
    adjective8.className = "bgPink";
  } 
  if (adverb.value == "") {
    adverb.className = "bgPink";
  } 
  if (noun3.value == "") {
    noun3.className = "bgPink";
  } 
  if (adjective9.value == "") {
    adjective9.className = "bgPink";
  } 

  if (adjective1.value == "" || timeperiod.value == "" || pnoun1.value == "" || pnoun2.value == "" || verb1.value == "" || noun1.value == "" || noun2.value == "" || adjective2.value == "" || adjective3.value == "" || adjective4.value == "" || pnoun3.value == "" || adjective5.value == "" || adjective6.value == "" || adjective7.value == "" || pnoun4.value == "" || exclamation.value == "" || adjective8.value == "" || adverb.value == "" || noun3.value == "" || adjective9.value == "") {
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
  const storyText2 = "First we see the ringmaster. A ringmaster will " + verb1.value + " the whole " + noun1.value + ". Sometimes the clowns will interrupt the ringmaster by throwing a " + noun2.value + " in their face or doing other " + adjective2.value + " things.";
  const storyText3 = "Many circuses have animal acts. There may be " + adjective3.value + " tigers or " + adjective4.value + " elephants. Sometimes there are even cute, tiny " + pnoun3.value + " doing tricks!";
  const storyText4 = "My " + adjective5.value + " part of the circus is the acrobats. There are " + adjective6.value + " trapeze artists, " + adjective7.value + "-rope walkers, and even artists who juggle " + pnoun4.value + "! " + exclamation.value + "!";
  const storyText5 = "At the end of the show there will be a(n) " + adjective8.value + " finale where a lot of things happen at once. When the finale is over, the audience claps " + adverb.value + " and goes home with " + noun3.value + " in their hearts.";
  const storyText6 = "The circus is " + adjective9.value + "!!";

  addTextNode(storyText1);
  addTextNode(storyText2);
  addTextNode(storyText3);
  addTextNode(storyText4);
  addTextNode(storyText5);
  addTextNode(storyText6);

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
  verb1.value = "";
  noun1.value = "";
  noun2.value = "";
  adjective2.value = "";
  adjective3.value = "";
  adjective4.value = "";
  pnoun3.value = "";
  adjective5.value = "";
  adjective6.value = "";
  adjective7.value = "";
  pnoun4.value = "";
  exclamation.value = "";
  adjective8.value = "";
  adverb.value = "";
  noun3.value = "";
  adjective9.value = "";


  removePinkBG();

  theStory.innerHTML = "";

  adjective1.focus();
}

function removePinkBG() {
  adjective1.classList.remove("bgPink");
  timeperiod.classList.remove("bgPink");
  pnoun1.classList.remove("bgPink");
  pnoun2.classList.remove("bgPink");
  verb1.classList.remove("bgPink");
  noun1.classList.remove("bgPink");
  noun2.classList.remove("bgPink");
  adjective2.classList.remove("bgPink");
  adjective3.classList.remove("bgPink");
  adjective4.classList.remove("bgPink");
  pnoun3.classList.remove("bgPink");
  adjective5.classList.remove("bgPink");
  adjective6.classList.remove("bgPink");
  adjective7.classList.remove("bgPink");
  pnoun4.classList.remove("bgPink");
  exclamation.classList.remove("bgPink");
  adjective8.classList.remove("bgPink");
  adverb.classList.remove("bgPink");
  noun3.classList.remove("bgPink");
  adjective9.classList.remove("bgPink");
}