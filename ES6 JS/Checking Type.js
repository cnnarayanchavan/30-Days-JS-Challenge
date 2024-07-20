let obj = {
    title : "The Worrier",
    123 : "Narayana",
    true : "yes",
    name : "kkrtu"
}
console.log(obj[123]);

for (const keys in obj){
    console.log(`keys:${keys} and types:${typeof keys} and vlues : ${obj[keys]}`);
}

//keys of an objects are always object types
