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
    // const container = document.querySelector('.main');
    // const content = document.createElement('div');
    // content.classList.add('content');
    // // Creates a new card 
    // container.appendChild(content);
    // const card = document.querySelector('.content');
    // const cardContent = document.createElement('div');
    // cardContent.classList.add('card');
    // cardContent.textContent = `Book name:${Book.bookName}`;
    // // Creates a new div that includes information about the object's first attribute bookName
    // card.appendChild(cardContent);
    // const cardTwo = document.querySelector('.content');
    // const cardTwoContent = document.createElement('div');
    // cardTwoContent.classList.add('card');
    // cardTwoContent.textContent = `Book author:${Book.bookAuthor}`;
    // // Creates a new div that includes information about the object's first attribute bookName
    // cardTwo.appendChild(cardTwoContent);

    // Creates a new card 
    const container = document.querySelector('.main-container');
    const card = document.createElement('div');
    card.classList.add('card');
    container.appendChild(card);

    // Create name div
    const bookNameCard = document.createElement('div');
    bookNameCard.classList.add('book-name');
    bookNameCard.textContent = `Book name:${Book.bookName}`;
    card.appendChild(bookNameCard);

    // Create author div
    const bookAuthorCard = document.createElement('div');
    bookAuthorCard.classList.add('book-author');
    bookAuthorCard.textContent = `Book author:${Book.bookAuthor}`;
    card.appendChild(bookAuthorCard);



  }
  return myLibrary = [];
}

// addBookToLibrary();
