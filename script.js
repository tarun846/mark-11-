const dateOfBirth=document.querySelector("#date-of-birth");
const luckyNumber=document.querySelector("#lucky-number");
const checkNumberButton=document.querySelector("#check-number-btn");
const outputBox=document.querySelector("#output-box");


console.log('papa2');
checkNumberButton.addEventListener('click' , checkBirthdayIsLucky )
function checkBirthdayIsLucky(){
    // console.log(luckyNumber.value=="");
    const bdate=dateOfBirth.value;
    const sum=calculateSum(bdate);
    if(bdate&&luckyNumber.value!=""){
        var message;
        if(checkLuck(sum)) message="your birthday is lucky.";
        else message="Your birthday is not lucky.";
        outputBox.innerText=message;
    }
    else{
        outputBox.innerText="pls enter the both fields.";
    }
}
function checkLuck(sum){
    if(sum%parseInt(luckyNumber.value)==0) return true;
    return false;
}
function calculateSum(bdate){
    console.log('papa3');
    bdate=bdate.replaceAll("-","");
    let sum=0;
    for(let index=0;index<bdate.length;index++){
        sum+=parseInt(bdate.charAt(index));
    }
    return sum;
}