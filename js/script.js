let inputEmail = document.querySelector("input");
let msgSubmit = document.querySelector(".msg-submit");
let form = document.querySelector("form");

let styleBtn = document.head.appendChild(document.createElement("style"));


form.addEventListener("submit", e=>{
    e.preventDefault();
    const emailValue = inputEmail.value;

    if (!validateEmail(emailValue)) {
        msgSubmit.style.display = "inline-block";
        msgSubmit.textContent = "Please provide a valid email";
        msgSubmit.style.color = "#f96262";
        styleBtn.innerHTML = ".btn-submit:before { display: block; }";

    } else {
        msgSubmit.style.display = "inline";
        msgSubmit.textContent = "Thank you!";
        msgSubmit.style.color = "#66CC66";
        inputEmail.disabled = true;
        inputEmail.style.color = "#AAA"
        styleBtn.innerHTML = ".btn-submit:before { display: none; }";
    }
})

function validateEmail(email) {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}