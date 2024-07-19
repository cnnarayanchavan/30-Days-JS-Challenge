const booksInfo = {
    "tile" : "The Rock",
    "author" : "KR Gogi",
    "year" : 2009,

    //adding method that return book's title and author.
    "meth1" : function(){
        console.log(`hey there you purchesed the books has title ${this.tile} $ authos is ${this.author}`);
        //here we can use this instead of using object name, where this represent the current object in scope
    }
}

// console.log(booksInfo.tile);
// console.log(booksInfo.author);

booksInfo.meth1();

//object methods

// "meth1" : function(){
//     console.log(`hey there you purchesed the books has title ${this.tile} $ authos is ${this.author}`);
// }


//

