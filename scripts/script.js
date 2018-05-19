let libraryTable = document.querySelector('#library-table');

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

let gameOfThrone = new Book('Game of Thrones', 'George R.R. Martin');
addBookToLibrary(gameOfThrone);
console.log(myLibrary);
console.log(libraryTable);
