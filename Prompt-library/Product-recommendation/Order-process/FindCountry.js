const limit = 35;
let phonenumber = '+' + workflow.PhoneNumber;

const record = await PhoneCodeTable.findRecords({
    limit,
    filter:  AI`Phone code that is the same as the phone code from ${phonenumber}`,
})

let phoneCountry = record[0].Country;

if (phoneCountry.toLowerCase() === workflow.Country.toLowerCase()) workflow.SameCountry = true;
else workflow.SameCountry = false;



