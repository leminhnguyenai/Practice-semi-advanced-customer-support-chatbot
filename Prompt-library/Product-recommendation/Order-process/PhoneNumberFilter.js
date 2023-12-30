function isNumeric(str) {
  return /^\d+$/.test(str);
}
// Numeric test

function ValidityCheck(Number) {
    if (Number.length >=8 && Number.length <=15 && isNumeric(Number) === true) return true;
    else return false;
}
// Phone number validity test

if(workflow.PhoneNumber[0] === '+') workflow.PhoneNumber = workflow.PhoneNumber.slice(1);  

if (ValidityCheck(workflow.PhoneNumber) === true){
    let phonecode = workflow.PhoneNumber.substring(0,2);
    if (phonecode[0] === '0') workflow.PhoneNumberType = "No Country";
    else if (phonecode[0] !== '0') workflow.PhoneNumberType = "Have Country";
} 

//document.getElementById("demo").innerHTML = result;