let my2DArray = [
    [12,23,34,45],
    [23,34,45,56],
    [56,34,78,56]
]

//console.log(my2DArray[1][1]);
let elementToFind = 78

for (let i = 0; i < my2DArray.length; i++) {                       //remember the number of rows is the length of an array
    for (let j = 0; j <=my2DArray.length; j++) {
        if (elementToFind == my2DArray[i][j]) {
            console.log(`Element ${elementToFind} found at index [${i},${j}]`);
        }
    }
    
    
}
