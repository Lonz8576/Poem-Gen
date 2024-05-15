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
