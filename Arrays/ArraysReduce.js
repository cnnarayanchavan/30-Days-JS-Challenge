//reduce 
//has acc and curr values

let myArr = [1,2,3,4,5]
const result = myArr.reduce( (acc , curr)=>{
    return acc+curr;
},0)

console.log(result);