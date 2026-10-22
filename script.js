
const nameInput = document.getElementById("username");
const greetButton = document.getElementById("greetButton");
const greeting = document.getElementById("greeting");

function showGreeting() {
    const name = nameInput.value.trim();

    if (name === "") {
        greeting.textContent = "Please enter your name!";
    } else {
        greeting.textContent = `Hello, ${name}! Welcome to my app. 😊`;
    }
}

greetButton.addEventListener("click", showGreeting);
