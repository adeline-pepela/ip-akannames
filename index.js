// User interface (or front-end) logic:
const btn = document.getElementById("submit");
const form = document.getElementById("form");
let gender,date, akanName;
btn.addEventListener('click', (event) => {
    event.preventDefault();
    console.log("Clicked...");
    gender = form.elements.gender.value;
    date= form.elements.date.value;
    console.log(gender, date);
    cc=parseInt(date.slice(0,2));
    yy=parseInt(date.slice(2,4));
    mm=parseInt(date.slice(5,7));
    dd=parseInt(date.slice(8));
    dayOfWeek =  ( ( (cc/4) -2*cc-1) + ((5*yy/4) ) + ((26*(mm+1)/10)) + dd ) % 7;
    console.log(cc,yy,mm,dd);
    console.log(dayOfWeek);
    dayOfWeek = Math.floor(dayOfWeek);
    console.log(dayOfWeek);
    const akan = document.getElementById("akan");
   

  
// Business (or back-end) logic:
    const akanmale = ["Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw","Kofi","Kwame"];
    const akanfemale = ["Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"];
    if(gender ==="male"){
        akanName = akanmale[dayOfWeek]
    }
    else if(gender ==="female"){
        akanName = akanfemale[dayOfWeek]
    }
    
    akan.innerHTML= akanName;
})
