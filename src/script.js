






function displayPoem(response){
 new Typewriter("#poem-area", {
  strings: response.data.answer,
  autoStart: true,
  delay: 1.5,

});
}




function generatePoem(event){
 event.preventDefault();

 let instructions = document.querySelector("#prompt-input");
let apiKey = "2e99ddt6a7e37f7c164ob09d070ab380";
let prompt = `Generate a poem written in English by Sappho about ${instructions.value}`;
let context = "Please include one of the user instruction:You are a scholar in Archaic Greek poems and love to write short poems. Your mission is to generate a poem from this time period in the English language.";
let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

axios.get(apiUrl).then(displayPoem);

}


let poemElement = document.querySelector("#poem-form");
poemElement.addEventListener("submit", generatePoem);



