const addBook = () => {
    const adding = makeBook(iJudul.value,iAuthor.value,iYear.value,iCheck.checked,true);
    const bookObject = generateObject(iJudul.value, iAuthor.value, iYear.value, iCheck.checked);
    
    adding[idBook] = bookObject.id;
    console.log(iAuthor.value)
    books.push(bookObject);
    
    saveData();
    
    
}

const makeBook = (title,author,years,isComplete) => {

}


