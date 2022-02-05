
// problem 3:


function picnicBudget(numberOfVisitor){
   if(numberOfVisitor>=0){
    if(numberOfVisitor<=100){
        let costOfFirst100= numberOfVisitor*5000;
        let totalCost = costOfFirst100;
        return totalCost;
    }
    else if (numberOfVisitor<=200){
        let costOfFirst100 = 100*5000;
        let costOfSecond100 = (numberOfVisitor-100)*4000;
        let totalCost = costOfFirst100 + costOfSecond100;
        return totalCost;
    }
    else{
        let costOfFirst100 = 100*5000;
        let costOfSecond100 = 100*4000;
        let costOfRest = (numberOfVisitor-200)*3000;
        let totalCost= costOfFirst100 + costOfSecond100 + costOfRest;
        return totalCost;
    }
   }
   else{
       console.log("Enter a valid number!!!");
   }  
}
let getTotalBUdget = picnicBudget(-250);
console.log(getTotalBUdget);