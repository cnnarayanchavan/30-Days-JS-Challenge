const booksInfo = {
    "tile" : "The Rock",
    "author" : "KR Gogi",
    "year" : 2009,

    //add method with parameter which update the year property of an object book
    "updateYear" : function(year){
        this.year = year;
    }
}

booksInfo.updateYear(2005);
console.log(booksInfo.year);   //update year from 2009 to 2005