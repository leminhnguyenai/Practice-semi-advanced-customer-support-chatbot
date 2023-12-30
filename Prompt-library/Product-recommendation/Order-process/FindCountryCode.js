const limit = 35;

const record = await PhoneCodeTable.findRecords({
    limit,
    filter:  AI`Country is ${workflow.Country}`,
})
let phonecode = record[0].Code;

workflow.PhoneNumber = phonecode + workflow.PhoneNumber.slice(1);