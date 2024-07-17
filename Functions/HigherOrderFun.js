//write a higher order function that takes a function and number and call the function that many times

function hoFun(num, callFun) {
    for(i = 1; i<=num; i++){
        console.log(callFun());
    }
}


//function for passing as an arguments

function callFun(){
return "Hello World!!"
}


console.log(hoFun(5,callFun));