let myLibrary = [];

function Book(bookName, bookAuthor) {
    this.bookName = bookName
    this.bookAuthor = bookAuthor
}

function addBookToLibrary() {
  bookName = prompt("What is the bookname?");
  bookAuthor = prompt("Who is the author?");
  const userInput = new Book(bookName, bookAuthor);
  return myLibrary += Object.values(userInput);
}

addBookToLibrary();
console.log(myLibrary)