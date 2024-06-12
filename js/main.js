const generatePassword = (base, length) => {
    let password = "";
    for (let x = 0; x < length; x++) {
        let random = Math.floor(Math.random() * base.length);
        password += base[random];
    }
    return password;
}
const generate = () => {
    const inputLength = document.getElementById('length');
    const checkbox1 = document.getElementById('includeNumbers');
    const checkbox2 = document.getElementById('includeSymbols');
    const passwordOutput = document.getElementById('passwordOutput');
    let length = parseInt(inputLength.value);
    let base = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const numbers = "0123456789";
    const symbols = "!@#$%^&*()_+~`|[]:;?><,./-=";
    if (checkbox1.checked) base += numbers;
    if (checkbox2.checked) base += symbols;
    const password = generatePassword(base, length);
    passwordOutput.innerText = password;
}
const button = document.createElement("button");
button.type = "button"
button.innerText = "Generate Password"
document.body.appendChild(button);
window.addEventListener("DOMContentLoaded", () => {
const btnGenerate = document.querySelector('button');
btnGenerate.addEventListener("click", generate);
});
