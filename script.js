let allInp = document.querySelectorAll('.inp');
let len = document.getElementById('len');
let smallLetters = "abcdefghijklmnopqrstuvwxyz";
let capLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let sym = "!@#$%^&*()_-+={[}]|:;";
let showVal = document.getElementById('span');
let btn = document.getElementById('btn');
let copyBtn = document.getElementById('copy-btn');

btn.addEventListener("click", (e) => {
    e.preventDefault();

    let length = parseInt(len.value);
    if (isNaN(length) || length <= 0) {
        showVal.textContent = "Invalid length!";
        return;
    }

    let selectedOptions = [];
    allInp.forEach((inp) => {
        if (inp.checked) {
            selectedOptions.push(inp.value);
        }
    });

    if (selectedOptions.length === 0) {
        showVal.textContent = "Please select at least one option!";
        return;
    }

    let charPool = "";
    if (selectedOptions.includes("caps")) {
        charPool += capLetters;
    }
    if (selectedOptions.includes("symbols")) {
        charPool += sym;
    }
    charPool += smallLetters;

    let pass = "";
    for (let i = 0; i < length; i++) {
        let randomChar = charPool[Math.floor(Math.random() * charPool.length)];
        pass += randomChar;
    }

    showVal.textContent = pass;
});

copyBtn.addEventListener("click", () => {
    const pass = showVal.textContent;

    if (pass) {
        navigator.clipboard.writeText(pass)
            .then(() => {
                alert("Password copied to clipboard!");
            })
            .catch((err) => {
                alert("Failed to copy password.");
            });
    } else {
        alert("No password to copy!");
    }
});
