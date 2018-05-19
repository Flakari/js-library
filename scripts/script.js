let libraryTable = document.querySelector('#library-table');
let formSubmit = document.querySelector('.form-submit');


let myLibrary = [];

function Book(title, author, pageCount, read) {
    this.title = title;
    this.author = author;
    this.pageCount = pageCount;
    this.read = read;
}

function addBookToLibrary(newBook) {
    myLibrary.unshift(newBook);
}

function render() {
    
}

formSubmit.addEventListener('click', function(e) {
    let bookData = document.getElementsByTagName('input');
    
    if(bookData[3].checkValidity()) {
        e.preventDefault();
    } else {
        return false;
    }
    
    newBook = new Book(bookData[1].value, bookData[2].value, bookData[3].value, bookData[4].checked);
    addBookToLibrary(newBook);
    console.log(myLibrary);
    for (let i = 1; i < bookData.length - 1; i++) {
        bookData[i].value = '';
    }
    bookData[bookData.length - 1].checked = false;
});

let newBook = new Book('Game of Thrones', 'George R.R. Martin', 500, true);
addBookToLibrary(newBook);
newBook = new Book('Expendables', 'Slyvester Stallone', 300, true);
addBookToLibrary(newBook);
console.log(myLibrary);

