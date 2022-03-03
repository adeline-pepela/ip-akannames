const btn = document.getElementById("submit");
const form = document.getElementById("form");
let gender,date;
btn.addEventListener('click', (event) => {
    event.preventDefault();
    console.log("Clicked...");
    gender = form.elements.gender;
    date= form.elements.date;
    console.log(gender, date);
});
const akan = document.getElementById("akan");
akan.innerHTML= "anything"

