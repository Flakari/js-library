let libraryTable = document.querySelector('#library-table');
let libraryBody = libraryTable.querySelector('tbody');
let formSubmit = document.querySelector('.form-submit');
let newBookForm = document.querySelector('#new-book-form');

let myLibrary = [new Book('Gardens of the Moon', 'Steven Erikson', 712, false, 1), new Book('Game of Thrones', 'George R.R. Martin', 694, true, 0), new Book('','',0,false,-1)];
let checkboxList = [];

function Book(title, author, pageCount, read, id) {
    this.title = title;
    this.author = author;
    this.pageCount = pageCount;
    this.read = read;
    this.id = id;
}

function addBookToLibrary(newBook) {
    myLibrary.unshift(newBook);
}

function newBookRender(newBook) {
    let objName = ['title', 'author', 'pageCount', 'read'];
    let objValue = [newBook.title, newBook.author, newBook.pageCount, newBook.read];
    let tableRow = libraryBody.insertRow(1);
    tableRow.setAttribute('data-id', newBook.id);
    for (let i = 0; i < objName.length; i++) {
        let tableCell = tableRow.insertCell(i);
        tableCell.setAttribute('class', objName[i]);
        if (i == 3) {
            tableCell.innerHTML = '<input type="checkbox" name=' + objName[3] + ' class="read-check">';
            if (objValue[3] == true) {
                let cellCheck = tableCell.querySelector('input');
                cellCheck.checked = true;
            }
            return;
        }
        tableCell.innerText = objValue[i];
    }
}

function tableReset() {
    while (libraryBody.children[1]) {
        libraryBody.removeChild(libraryBody.children[1]);
    }
}

function fullRender() {
    tableReset();
    for(let i = myLibrary.length - 2; i >= 0; i--) {
        newBookRender(myLibrary[i]);
    }
}

formSubmit.addEventListener('click', function(e) {
    let bookData = newBookForm.getElementsByTagName('input');
    
    if(bookData[2].checkValidity()) {
        e.preventDefault();
    } else {
        return false;
    }
    
    let newBook = new Book(bookData[0].value, bookData[1].value, bookData[2].value, bookData[3].checked, myLibrary[0].id + 1);
    console.log(newBook);
    addBookToLibrary(newBook);
    console.log(myLibrary);
    for (let i = 0; i < bookData.length; i++) {
        bookData[i].value = '';
    }
    bookData[3].checked = false;
    fullRender();
    checkboxUpdate();
});

function checkboxUpdate() {
    let libraryCheckBox = libraryBody.getElementsByClassName('read-check');
    console.log(libraryCheckBox);
    let checkboxList = [];
    checkboxList = Array.from(libraryCheckBox);
    checkboxList.forEach(check => {
        check.addEventListener('click', function(e) {
            let dataID = e.target.parentElement.parentElement.getAttribute('data-id');
            let idFilter = myLibrary.filter(book => book.id == dataID);
            if (e.target.checked == true) {
                idFilter[0].read = true;
            } else {
                idFilter[0].read = false;
            }
        });
    });
}

console.log(myLibrary);
window.onload = fullRender();
window.onload = checkboxUpdate();
