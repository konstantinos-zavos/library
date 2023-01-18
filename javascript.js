let myLibrary = [];

function Book(bookName, bookAuthor, bookPages) {
  this.bookName = bookName;
  this.bookAuthor = bookAuthor;
  this.bookPages = bookPages;
}

function addBookToLibrary() {
  bookName = prompt("What is the bookname?");
  bookAuthor = prompt("Who is the author?");
  bookPages = prompt("How many pages?")
  const userInput = new Book(bookName, bookAuthor, bookPages);
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

    const image = document.createElement('img')
    image.src  = 'https://cover2coverbookdesign.com/site/wp-content/uploads/2019/03/geometric1.jpg'
    card.appendChild(image);

    // Creates name div
    const bookNameCard = document.createElement("div");
    bookNameCard.classList.add("book-name");
    bookNameCard.textContent = `${Book.bookName}`;
    card.appendChild(bookNameCard);

    // Creates author div
    const bookAuthorCard = document.createElement("div");
    bookAuthorCard.classList.add("book-author");
    bookAuthorCard.textContent = `by ${Book.bookAuthor}`;
    card.appendChild(bookAuthorCard);

    // Creates pages div
    const bookPagesCard = document.createElement("div");
    bookPagesCard.classList.add("book-pages");
    bookPagesCard.textContent =`Pages: ${Book.bookPages}`;
    card.appendChild(bookPagesCard);
  }
  return (myLibrary = []);
}

function combined() {
  addBookToLibrary();
  loopThroughBooks();
}