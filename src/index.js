let generatePoem = (event) => {
event.preventDefault();
let poemElement = document.querySelector("#poem");
poemElement.innerHTML = "LALALALALA<"
  new Typewriter("#poem", {
    strings: `${poemElement.innerHTML}`,
    autoStart: true,
    cursor: "",
    delay: 1,
  });
}
let poemFormElement = document.querySelector("#poem-generator-form");
poemFormElement.addEventListener("submit", generatePoem);