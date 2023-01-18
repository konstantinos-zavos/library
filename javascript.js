let myLibrary = [];

function Book(bookName, bookAuthor) {
  this.bookName = bookName;
  this.bookAuthor = bookAuthor;
}

function addBookToLibrary() {
  bookName = prompt("What is the bookname?");
  bookAuthor = prompt("Who is the author?");
  const userInput = new Book(bookName, bookAuthor);
  const pushToArray = myLibrary.push(userInput);
  return pushToArray;
}

function loopThroughBooks() {
  for (const Book of myLibrary) {
    // Creates a new card
    const container = document.querySelector(".main-container");
    const card = document.createElement("div");
    card.classList.add("card");
    container.appendChild(card);

    // Creates name div
    const bookNameCard = document.createElement("div");
    bookNameCard.classList.add("book-name");
    bookNameCard.textContent = `Book name:${Book.bookName}`;
    card.appendChild(bookNameCard);

    // Creates author div
    const bookAuthorCard = document.createElement("div");
    bookAuthorCard.classList.add("book-author");
    bookAuthorCard.textContent = `Book author:${Book.bookAuthor}`;
    card.appendChild(bookAuthorCard);
  }
  return (myLibrary = []);
}

function combined() {
  addBookToLibrary();
  loopThroughBooks();
}