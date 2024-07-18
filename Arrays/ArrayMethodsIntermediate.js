arr = [12,23,34,45,56,67]
//count element from an array


//tooooo lenfthy process 

// let sum = 0;
// for(i=0; i<arr.length; i++){
//     sum+=arr[i];
// }

// console.log(sum);


//map
const op = arr.map( (element)=>{
    return element*2;
} )
console.log(op);



//filter

//create new array with only even number using filter method 

array = [2,4,3,5,2,4,6,7]
const ecenNumber = array.filter( (ele)=>{
return ele%2===0;
} )

console.log(ecenNumber);


//reduce       //it has tow paramether one is accumalater and another one is current 

let newArr = [3,5,2,6,4,7];
const newResult = newArr.reduce( (acc ,currentValue)=>{
    return acc+currentValue;
},0 )

console.log(newResult);

