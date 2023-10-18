
let nomor = 0;
const addBook = () => {
    const adding = makeBook(iJudul.value, iAuthor.value, iYear.value, iCheck.checked, true);
    const bookObject = generateObject(iJudul.value, iAuthor.value, iYear.value, iCheck.checked);
    
    adding[idBook] = bookObject.id;
    books.push(bookObject);
    if (iCheck.checked) {
        id_done.append(adding);
    } else {
        id_undone.append(adding);
    }


    updateStorage();
    
    
}

const done = () => {
    return createButton('green', 'Selesai dibaca', function (event) {
        addBookComplete(event.target.parentElement.parentElement);
    });
}

const undone = () => {  
    return createButton('green', 'Belum selesai di Baca', function (event) {
        addBookNotComplete(event.target.parentElement.parentElement);
    });
}


const deleteButton = () => {
    return createButton('red', 'Hapus buku', function (event) {
        deletItems(event.target.parentElement.parentElement);
    });
}


const deletItems = (taskElement) => {
    const booksPosition = findIndex(taskElement[idBook]);
    books.splice(booksPosition, 1);

    taskElement.remove();
    updateStorage();
}

const makeBook = (title,author,years,isComplete,selectText) => {
    nomor++;
    console.log(isComplete)
    const o_title = document.createElement('h3');
    const o_author = document.createElement('p');
    const o_year = document.createElement('p');
    o_title.innerText =nomor + ". Judul : " +  title;

    if (selectText) {
        o_author.innerText = 'Penulis: ' + author;
        o_year.innerText = 'Tahun: ' + years;
    } else {
        o_author.innerText = author;
        o_year.innerText = years;
    }

    const container = document.createElement('article');
    container.classList.add('book_item');

    const action = document.createElement('div');
    action.classList.add('action');

    if (isComplete) {
        action.append(
            undone(),
            deleteButton(),
            
        )
    } else {
        action.append(
            done(),
            deleteButton()
        );
    }

    container.append(o_title, o_author, o_year);
    container.append(action);

    return container;
}

// kolom jawaban

const addBookComplete = (taskElement) => {

    const completed = true;

    const o_title = taskElement.querySelector('h3').innerText;
    const o_author = taskElement.querySelector('p')[0].innerText;
    const o_year = taskElement.querySelector('p')[1].innerText;

    book = findBook(taskElement[idBook]);

    const newBooks = makeBook(o_title, o_author, o_year, completed, false);
    book.isComplete = completed;
    newBooks[idBook] = book.id;

    done.append(newBooks);
    taskElement.remove();   

    updateStorage();
}

function addBookNotComplete(taskElement) {
    

    const h3_judul = taskElement.querySelector('h3').innerText;
    const p_penulis = taskElement.querySelectorAll('p')[0].innerText;
    const p_tahun = taskElement.querySelectorAll('p')[1].innerText;

    const newBooks = makeBook(h3_judul, p_penulis, p_tahun, false, false);
    
    const book = findTodo(taskElement[TODO_ITEMID]);

    book.isComplete = false;
    newBooks[TODO_ITEMID] = book.id;
    

    undone.append(newBooks);
    taskElement.remove();

    updateStorage();
}

function createButton(nameClass, txt, eventListener) {
    const button = document.createElement('button');
    button.classList.add(nameClass);
    button.innerText = txt;
    button.addEventListener('click', function (event) {
        eventListener(event);
        event.stopPropagation();
    });

    return button;
}

function refreshBooks() {
    const id_done = document.getElementById("completeBookshelfList");
    const id_undone = document.getElementById("incompleteBookshelfList");
    for (let book of books) {
        const newBooks = makeBook(book.title, book.author, book.year, book.isComplete, true);
        newBooks[idBook] = book.id;

        if (book.isComplete) {
            id_done.appendChild(newBooks);
        } else {
            id_undone.appendChild(newBooks);
        }
    }
}

function pencarian() {
    const semuaElement = document.querySelectorAll('article');

    const search = document.getElementById('searchBookTitle').value;

    for (let element of semuaElement) {
        element.style.display = 'none';
        let judul = element.querySelector('h3').innerText;
        if (judul.includes(search)) {
            element.style.display = 'block';
        };
    }

}