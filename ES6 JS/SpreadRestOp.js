let arr1 = [4,5,6,7,8,9,10];

//this is merging array using spread operator 
let arr2 = [1,2,3,...arr1]
console.log(arr1);
console.log(arr2);
let addArr = arr2.reduce( (acc,curr)=>{
    return acc+curr;
},0)

console.log(addArr);