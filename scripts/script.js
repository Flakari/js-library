let libraryTable = document.querySelector('#library-table');
let libraryBody = libraryTable.querySelector('tbody');
let formSubmit = document.querySelector('.form-submit');
let libraryCheckBox = libraryBody.querySelectorAll('input[type=checkbox]');

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
    let objName = ['title', 'author', 'pageCount', 'read'];
    let objValue = [newBook.title, newBook.author, newBook.pageCount, newBook.read];
    let tableRow = libraryBody.insertRow(1);
    for (let i = 0; i < objName.length; i++) {
        let tableCell = tableRow.insertCell(i);
        tableCell.setAttribute('class', objName[i]);
        if (i == 3) {
            tableCell.innerHTML = '<input type="checkbox" name=' + objName[3] + '>';
            if (objValue[3] == true) {
                let cellCheck = tableCell.querySelector('input');
                cellCheck.checked = true;
            }
            return;
        }
        tableCell.innerText = objValue[i];
    }
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
    render();
    console.log(myLibrary);
    for (let i = 1; i < bookData.length - 1; i++) {
        bookData[i].value = '';
    }
    bookData[4].checked = false;
});

libraryCheckBox.forEach(check => {
    check.addEventListener('click', function(e) {
        console.log([].indexOf.call(libraryCheckBox, e.target));
    });
});

let newBook = new Book('Game of Thrones', 'George R.R. Martin', 500, true);
addBookToLibrary(newBook);
newBook = new Book('Expendables', 'Slyvester Stallone', 300, true);
addBookToLibrary(newBook);
console.log(myLibrary);
console.log(libraryCheckBox);
