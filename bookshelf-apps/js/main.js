// membuat inisialiasi awal suatu halaman. DOMContentLoaded


window.addEventListener("DOMContentLoaded",function () {
    
    submitBook.addEventListener("submit",function (e) {
        e.preventDefault();
        addBook();
    })

    loadStorage();

})


document.addEventListener("dataSaved", ()=>{
    console.log("Data tersimpan");
})


document.addEventListener("dataLoaded", ()=>{
    
})