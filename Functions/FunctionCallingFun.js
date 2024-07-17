//write a higher order function that takes tow functions and a value, applies the first function to a value, and then applies the second function to the result.


let value = [4,3,5,6,2,7];
// console.log(myFun(fun1,fun2,array));    //as it is function expression we cannot access it before initialization


const myFun = (fun1,fun2,value)=>{
    const result1 = fun1(value);
    const result2 = fun2(result1);
    return result2;
}


function fun1(arr){
    arr.push(50,60,70);
    return arr;
}

function fun2(arr){
    arr.sort((a,b)=>a-b)       //used comparision function to sort the array 
    return arr;
}


const finalResult = myFun(fun1,fun2,value);
console.log(finalResult);

// let array = [];

// console.log(array.push(12,13,14,15));       //it will return the length 

// console.log(array);   //now this will return the array



// Comparison Function (a, b) => a - b

// If a - b is negative: This means a is less than b, so a should be placed before b.

// If a - b is zero: This means a and b are equal in value.

// If a - b is positive: This means a is greater than b, so a should be placed after b.


 