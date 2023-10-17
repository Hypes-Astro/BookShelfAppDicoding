
window.addEventListener("load",function () {
    checkStorage();
})

// cek Browser mampu localstorage. nyoba mengguankan ternary operator
const checkStorage = () => {
    return (typeof(Storage) === undefined) ? (alert("Your Browser doesnt support for localStorage"), false) : true;
}

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



 const saveData = () => {
    localStorage.setItem(localBooksKey,parsed);
    document.dispatchEvent(new Event('dataSaved'));
}

const loadStorage = () => {
    const serialData = localStorage.getItem(localBooksKey);

    let data = JSON.parse(serialData);
    
    (data !== null) ? books = data : undefined; //jika tidak ada yang ingn dikembalikan saat false bisa di isi dengan null,"",undefined
    document.dispatchEvent(new Event('dataLoaded'));
    console.log("dosono")



}



