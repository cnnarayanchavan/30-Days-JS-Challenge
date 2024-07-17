//write a function to check if the string contain specific character and return the boolean value

const checkString = (characterToCheck,String)=>{
        if(String.includes(characterToCheck)){
            // console.log(`Given string includes '${characterToCheck}'`);
            return true
        }else{
            // console.log(`Given string does not includes '${characterToCheck}'`);
            return false
        }
    }

    checkString('o', "Narayana")    //sequence of passing the parameters matters....
    console.log(checkString('o', "Narayana"));        

    
// let str1 = new String("Narayana");
// // console.log(str1.charAt(1));
// // console.log( str1.length);
// console.log(str1.includes('N'));



