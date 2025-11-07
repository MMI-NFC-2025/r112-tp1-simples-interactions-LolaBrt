// TODO
const rouge = document.querySelector("#a-mettre-en-rouge");
rouge.style.color = "red";

const button = document.querySelector("#en-rouge-suite-a-click");
button.addEventListener("click", (evt) => {
    rouge.style.color = "red";
});