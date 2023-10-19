// membuat inisialiasi awal suatu halaman. DOMContentLoaded
window.addEventListener("DOMContentLoaded", function () {
    const bookSubmit = document.getElementById("bookSubmit"); // Menggunakan ID yang sesuai

    bookSubmit.addEventListener("click", function (e) {
        e.preventDefault();
        addBook();
    });
    loadStorage();
});


document.addEventListener("dataSaved", ()=>{
    console.log("Data tersimpan");
})


document.addEventListener("dataLoaded", ()=>{
    refreshBooks();
})

const search = document.getElementById('searchBook');
search.addEventListener('submit', function (e) {
    e.preventDefault();
    pencarian();
});