


// cek Browser mampu localstorage. nyoba mengguankan ternary operator
// const checkStorage = () => {
//     return (typeof(Storage) === undefined) ? (alert("Your Browser doesnt support for localStorage"), false) : true;
// }

const checkStorage = () => {
    if (typeof Storage === "undefined") {
        alert("Your Browser doesn't support localStorage");
        return false;
    }


    if (books.length < 1) {
        nomor = 0;
    }

    return true;
};

// console.log(checkStorage())

// fungsi membuat object untuk berguna pada indexing di storage
 const generateObject = (title,author,year,isComplete) => {
    return{
        id : +new Date,
        title,
        author,
        year,
        isComplete
    }
    
}

function updateStorage() {
    if (checkStorage())
        saveData();

    console.log("updated")
}

 const saveData = () => {
    const parsed = JSON.stringify(books);
    localStorage.setItem(localBooksKey,parsed);
    document.dispatchEvent(new Event('dataSaved'));
}

const loadStorage = () => {
    const serialData = localStorage.getItem(localBooksKey);

    let data = JSON.parse(serialData);
    
    (data !== null) ? books = data : undefined; //jika tidak ada yang ingn dikembalikan saat false bisa di isi dengan null,"",undefined
    document.dispatchEvent(new Event('dataLoaded'));
    console.log("masuk ke load")
}

function findBook(bookId) {
    for (book of books) {
        if (book.id === bookId)
            return book;
    }
    return null;
}

function findIndex(bookId) {

    let index = 0
    for (book of books) {
        if (book.id === bookId)
            return index;

        index++;
    }

    return -1;
}




