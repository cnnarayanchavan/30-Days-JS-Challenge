let myArrow = (a,b,...value)=>{
   //return   a+b+value;       //here you are adding num to the array so it is concatinating not addition //33,1 2 3
   //instead we can apply reduce on array created by spread '(...)' operator
   let res = value.reduce( (acc,curr)=>{
    console.log(acc);
    console.log(curr);
    return acc+curr;
   },0)

   return  a+b+res;

}


console.log(myArrow(1,2,3,4,5));
