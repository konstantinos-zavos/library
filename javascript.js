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
    // Creates a new card 
    container.appendChild(content);
    const card = document.querySelector('.content');
    const cardContent = document.createElement('div');
    cardContent.classList.add('card');
    cardContent.textContent = `Author:${Book.bookName}`;
    // Creates a new div that includes information about the object's first attribute bookName
    card.appendChild(cardContent);
  }
}

// addBookToLibrary();
