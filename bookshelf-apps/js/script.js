id = 0;

// cek Browser mampu localstorage. nyoba mengguankan ternary operator

const checkStorage = () => {
    (typeof(Storage) == undefined) ? (alert("Your Browser doest support for localStorage"), false) : true;
}

// console.log(checkStorage())

// fungsi membuat object untuk berguna pada indexing di storage

const generateObject = (title,author,year,isComplete) => {
    return(
        id++,
        title,
        author,
        year,
        isComplete
    )
}

const SaveData = () => {
    localStorage.setItem(localBooksKey,parsed);
}

submitBook.addEventListener('submit', (event)=>{
    event.preventDefault();
    // logic add
})

