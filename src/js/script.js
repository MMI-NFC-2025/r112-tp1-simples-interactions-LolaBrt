// TODO
const rouge = document.querySelector("#a-mettre-en-rouge");
rouge.style.color = "red";

const button = document.querySelector("#en-rouge-suite-a-click");
button.addEventListener("click", (evt) => {
    button.style.color = "red";
});

const H2 = document.querySelectorAll("h2");
H2.forEach((element) => {
    element.addEventListener("click", (evt) => {
        element.style.color = "red";
    });
});