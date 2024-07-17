const findMax = function(num1,num2){
    //return Math.max(num1,num2)  easy way 
    
    //using conditional stmt

    if (num1>num2) {
        console.log(`${num1} is greater`);
    }else{
        console.log(`${num2} is greater`);
    }
}
console.log(findMax(12,100));