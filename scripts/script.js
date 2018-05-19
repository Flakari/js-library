let libraryTable = document.querySelector('#library-table');
let formSubmit = document.querySelector('.form-submit');


let myLibrary = [];

function Book(title, author) {
    this.title = title;
    this.author = author;
}

function addBookToLibrary(newBook) {
    myLibrary.push(newBook);
}

function render() {
    
}

formSubmit.addEventListener('click', function(e) {
    e.preventDefault();
    let bookData = document.getElementsByTagName('input');
    let consoleLog = ''
    for (let i = 1; i < bookData.length - 1; i++) {
        consoleLog += bookData[i].value + ' ';
    }
    consoleLog += bookData[bookData.length - 1].checked;
    console.log(consoleLog);
    for (let i = 1; i < bookData.length - 1; i++) {
        bookData[i].value = '';
    }
    bookData[bookData.length - 1].checked = false;
});

let gameOfThrone = new Book('Game of Thrones', 'George R.R. Martin');
addBookToLibrary(gameOfThrone);
console.log(myLibrary);
console.log(libraryTable);
