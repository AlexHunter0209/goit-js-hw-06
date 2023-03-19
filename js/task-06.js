const input = document.querySelector("#validation-input");
const validLength = input.getAttribute("data-length");

function handleInput() {
const currentLength = input.value.length;
if (currentLength === Number(validLength)) {
input.classList.add("valid");
input.classList.remove("invalid");
} else {
input.classList.add("invalid");
input.classList.remove("valid");
}
}

input.addEventListener("blur", handleInput);