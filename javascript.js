let myLibrary = [];

function Book(bookName, bookAuthor, bookPages) {
  this.bookName = bookName;
  this.bookAuthor = bookAuthor;
  this.bookPages = bookPages;
}

// Previous code that pushed object into the array

// function addBookToLibrary() {
//   bookName = prompt("What is the bookname?");
//   bookAuthor = prompt("Who is the author?");
//   bookPages = prompt("How many pages?")
//   const userInput = new Book(bookName, bookAuthor, bookPages);
//   const pushToArray = myLibrary.push(userInput);
//   return pushToArray;
// }


function loopThroughBooks() {
  for (const Book of myLibrary) {
    // Creates a new card
    const container = document.querySelector(".main-container");
    const card = document.createElement("div");
    card.classList.add("card");
    container.appendChild(card);
    
    // Create X button
    const crossButton = document.createElement("div");
    crossButton.classList.add("remove-card")
    crossButton.textContent = '×'
    crossButton.setAttribute("onclick","deleteCard()");
    // crossButton.onclick = deleteCard();
    // card.id.add("child");
    card.appendChild(crossButton)

    // Create img div
    const image = document.createElement('img')
    image.src  = './img/sample-cover.jpg'
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

    // Creates read div
    const bookReadTest = document.createElement("label");
    bookReadTest.classList.add("switch")
    card.appendChild(bookReadTest)
    const bookReadTest2 = document.createElement("input");
    bookReadTest2.type = "checkbox"
    bookReadTest.appendChild(bookReadTest2);
    const bookReadTest3 = document.createElement("span");
    bookReadTest3.classList.add("slider-round")
    bookReadTest.appendChild(bookReadTest3);
  }
  let abcElements = document.querySelectorAll('.card');
  for (let i = 0; i < abcElements.length; i++)
  abcElements[i].id = 'book-' + i;
  return (myLibrary = []);
}

function openModal() {
document.getElementById("myModal").style.display = "block";
}

function closeModal() {
document.getElementById("myModal").style.display = "none";
}

window.onclick = function(event) {
  if (event.target == document.getElementById("myModal")) {
    document.getElementById("myModal").style.display = "none";
  }
}

const submit = document.querySelector("#submit");
submit.addEventListener("click", submitClick, false);
function submitClick(event) {
  event.preventDefault();
}

function modalSubmit() {
  bookName = document.getElementById("book_name").value;
  bookAuthor = document.getElementById("book_author").value;
  bookPages = document.getElementById("book_pages").value;
  const userInput = new Book(bookName, bookAuthor, bookPages);
  myLibrary.push(userInput);
  closeModal();
  loopThroughBooks();
  return document.getElementById('form').reset();
}

function testFunct() {
  const test = document.querySelector(".remove-card");
  test.setAttribute("onclick","deleteCard();");
}

function deleteCard() {
  testFunct()
  const child = document.querySelector(".remove-card");
  return child?.parentElement?.remove();
}

// const crossButton = document.querySelector(".remove-card");
// crossButton.onclick = deleteCard();
// const card = document.querySelector(".card");
// card.id.add("child");
