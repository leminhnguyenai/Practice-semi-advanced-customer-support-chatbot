function checking(result, criteria) {
    const lowerCaseResult = result.toLowerCase();
    const lowerCaseCriteria = criteria.toLowerCase();
    return lowerCaseCriteria.includes(lowerCaseResult);
}
// function to check if the result is belong to a criteria or not

for (let i=1;i<=16;i++){
    const record = await ByteshopProductListTable.getRecord(i);
    const productTypes = record.Types;
    const productFeatures = record.Features;
    const productPurposes = record.Purposes;
    // get criteria info from the product

    if (checking(workflow.Types, productTypes) === true && checking(workflow.Features, productFeatures) === true && checking(workflow.Purposes, productPurposes) === true){
        workflow.ProductName = record.name;
        workflow.ProductDescription = record.description;
        workflow.ProductSpecs = record.specification;
        workflow.ProductPrice = record.price;
        workflow.CheckTypes = checking(workflow.Types, productTypes);
        workflow.CheckFeatures = checking(workflow.Features, productFeatures);
        workflow.CheckPurposes = checking(workflow.Purposes, productPurposes);
        break;
    }
    // get product information if all criteria match
}
