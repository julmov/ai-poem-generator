

let displayPoem = (response) => {
  new Typewriter("#poem", {
    strings: `${response.data.answer}`,
    autoStart: true,
    cursor: "",
    delay: 1,
  });
};

let generatePoem = (event) => {

let instructionsInput = document.querySelector("#user-instructions")
let apiKey = "6557bae1f19ecd4eect5adbe4o7e0153";
let prompt = `User instructions: Generate a French poem about ${instructionsInput.value}`;
let context = "You are romantic poem expert and love to write short poems. Your mission is to generate a 4 line poem in basic HTML but dont display that this is html. Make sure to follow user instructions.";
let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

let poemElement = document.querySelector("#poem");
poemElement.classList.remove("hidden");
poemElement.innerHTML = `<div class="blink">⌛ Generating a French poem about ${instructionsInput.value}</div>`; 


axios.get(apiUrl).then(displayPoem);

event.preventDefault();




}
let poemFormElement = document.querySelector("#poem-generator-form");
poemFormElement.addEventListener("submit", generatePoem);