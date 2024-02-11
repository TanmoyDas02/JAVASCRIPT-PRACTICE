const btn = document.getElementById("genPass");
const newPass = document.getElementById("newPass");
const slider = document.getElementById("range");
const rangeValue = document.getElementById("rangeValue");

const upprCase = document.getElementById("capLet");
const lowerCase = document.getElementById("smallLet");
const number = document.getElementById("number");
const symbol = document.getElementById("symbol");
const copyBtn = document.getElementById("copyBtn");


rangeValue.innerText = slider.value;
slider.addEventListener("input", (e) => {
    rangeValue.innerText = e.target.value
});

btn.addEventListener("click", () => {

    let capitalLetter = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    let smallLetter = 'abcdefghijklmnopqrstuvwxyz';
    let numberstr = '0123456789';
    let symbolstr = '!@#$%&*';

    let finalStr = '';

    if(upprCase.checked){
        finalStr += capitalLetter;
    }
    if(lowerCase.checked){
        finalStr += smallLetter;
    }
    if(number.checked){
        finalStr += numberstr;
    }
    if(symbol.checked){
        finalStr += symbolstr;
    } 

    if(finalStr === ''){
        alert("Please select atleast one option");
        return;
    }


    let latestPass = '';

    for(let i=0; i<slider.value; i++){
        let randomNum = Math.floor(Math.random() * finalStr.length); //get random index no
        latestPass += finalStr[randomNum];
    }

    newPass.innerText = `${latestPass}`
});

copyBtn.addEventListener("click", () => {
    if (!newPass.innerText) {
        alert("No Password to Copy");
        return;
    }
    window.navigator.clipboard.writeText(newPass.innerText);
    alert("Password Copied");
});