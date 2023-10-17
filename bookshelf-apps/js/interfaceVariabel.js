// variabel LOCAL STORAGE
const localBooksKey = 'Local_Books';

// ------------------------------

// variabel pada form -------------------
const iJudul = document.getElementById("inputBookTitle");
const iAuthor = document.getElementById("inputBookAuthor");
const iYear = document.getElementById("inputBookYear");
const iCheck = document.getElementById("inputBookIsComplete");
const submitBook = document.getElementById("inputBook");
//  -----------------------------------

// variabel untuk Array Object dan untuk identifikasi buku

var books = [];
var book;
const idBook = "bookId";
    
const parsed = JSON.stringify(books);  // merubah nilai array books kedalam bentuk json
// --------------------------------

// variabel untuk gunakan function membedakan sudah dan belum selesai

const id_done = document.getElementById("completeBookshelfList");
const id_undone = document.getElementById("incompleteBookshelfList");



// variabel muncul kan belum dibaca
const hasil = document.getElementById("hasil");





