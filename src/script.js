let copyButtonElement = document.querySelector("#copy-btn");
let poemAreaCopy = document.querySelector("#poem-area").innerText;

copyButtonElement.addEventListener("click", function() {
    let tempText = document.createElement("textArea");
    tempText.value = poemAreaCopy;
    document.body.appendChild(tempText);

    tempText.select();
    document.execCommand("copy");
    document.body.removeChild(tempText);
    alert("Text Copied 😊");

});








function generatePoem(event){
 event.preventDefault();
new Typewriter("#poem-area", {
  strings:"Forgotten by pickers. Not forgotten— they couldn't reach it.",
  autoStart: true,
  delay: 1.5,

});
}

let poemElement = document.querySelector("#poem-form");
poemElement.addEventListener("submit", generatePoem);
