let myLibrary = [];

function Book(bookName, bookAuthor) {
    this.bookName = bookName
    this.bookAuthor = bookAuthor
}

function addBookToLibrary() {
  bookName = prompt("What is the bookname?");
  bookAuthor = prompt("Who is the author?");
  const userInput = new Book(bookName, bookAuthor);
  let pushToArray = myLibrary.push(userInput);
  return pushToArray;
}

function loopThroughtBooks() {
  for (let Book of myLibrary) {
    console.log(Book);
    console.log(Book.bookName);
    const container = document.querySelector('.main');
    const content = document.createElement('div');
    content.classList.add('content');
    content.textContent = `Author:${Book.bookName}`;
    container.appendChild(content);
  }
}

addBookToLibrary();
