let tile = "ABC"
let author = "XYZ"
const booksInfo = {
    "tile" : "The Rock",
    "author" : "KR Gogi",
    "year" : 2009,
    "meth1" : ()=>console.log(`hey there you purchesed the books has title ${this.tile} $ authos is ${this.author}`),
    //here this keywork cannot access the property of an object so it will print the undefine for title and aothor as in the arrow function this keyword refer the global scope of an object
    "library" : {
        book1 : {
            name : "Mahabharat",
            author : "krushna"
        },
        book2 : {
            name : "Ramayana",
            author : "Valmiki"
        },
        book3 : {
            name : "Ravan Puran",
            author : "Ravan"
        }
    },

    library2 : {
        "books" : ["Mahabharata","Ramayana","ShivMahapuran","Ravanpuran"],
        "author" : ["kk gogi", "harish kk", "joda D", "valmikktio p"]
    }
}

console.log(booksInfo.library.book1.name);
const ans = booksInfo.library2.books
ans.forEach(  )