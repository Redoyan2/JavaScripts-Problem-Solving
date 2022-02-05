//problem 2:

function pandaCost(numOfSingara, numOfSomucha, numOfJilapi) {
    if (numOfSingara >= 0 && numOfSomucha >= 0 && numOfJilapi >= 0) {
        let totalCostOfSingara = numOfSingara * 7;
        let totalCostOfSomucha = numOfSomucha * 10;
        let totalCostOfJilapi = numOfJilapi * 15;
        let tolalCost = totalCostOfSingara + totalCostOfSomucha + totalCostOfJilapi;
        return tolalCost;
    }
    else{
        console.log('Enter valid number!!!');
    }


}


let getPandaCost = pandaCost(3, 5, -10);
console.log(getPandaCost);