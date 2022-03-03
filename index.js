const btn = document.getElementById("submit");
const form = document.getElementById("form");
let gender,date;
btn.addEventListener('click', (event) => {
    event.preventDefault();
    console.log("Clicked...");
    gender = form.elements.gender.value;
    date= form.elements.date.value;
    console.log(gender, date);
    cc=date.slice(0,2);
    yy=date.slice(2,4);
    mm=date.slice(5,7);
    dd=date.slice(8);
    console.log(cc,yy,mm,dd);
});
const akan = document.getElementById("akan");
akan.innerHTML= "anything"

